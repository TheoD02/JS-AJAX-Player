/* LOADING & INIT (TABLE) (URLDATA) */
// Public VAR
var nbPagesAct = null;
var maxLimit = null;
// Chargement de la page, afficher le tableau selon la valeur de l'url
function Init() {
    nbPagesAct = getParameterValue("?page=", 1);
    maxLimit = getParameterValue("&limit=", 10);

    loadPage(nbPagesAct, maxLimit)
}

// Récupère la valeur d'un parametre donner ("?parametre=XX" ou "&parametre=XX") et la valeur par default si il n'existe pas
function getParameterValue(parameter, defaultvalue) {
    var nb = defaultvalue;
    // Si url contient déjà &limit=X (Lire le numéro de page)
    if (document.location.href.includes(parameter)) {
        // Récupère les paramètres
        var urldata = document.location.href.substr(document.location.href.lastIndexOf(parameter) + parameter.length, document.location.href.length - document.location.href.lastIndexOf(parameter));
        // Si plusieurs paramètres après celui choisi alors choisir uniquement les données de celui qui nous intéresse
        if (urldata.includes("&")) {
            urldata = urldata.substr(0, urldata.indexOf("&"));
        }
        nb = urldata;
    }
    return nb;
}

// Change le numéro de page dans l'url
function changeUrlPageAndLimit(nbPage, maxLimit) {
    window.history.pushState("Changement de page", "Page " + nbPage, "/Test Ajax-PHP/?page=" + nbPage + "&limit=" + maxLimit);
}

function loadPage(nbPage, nbLimit) {
    // Charge la page selon la pagination et la limit
    $.ajax({
        url: 'get_table.php?page=' + nbPage + "&limit=" + nbLimit,
        method: "GET",
        dataType: 'json',
        success: function (response) {
            $('#dynamic-table').html(response);
        }
    });

    // Mise à jour de l'url
    changeUrlPageAndLimit(nbPagesAct, maxLimit);
    setTimeout(loadPagination(nbPagesAct, maxLimit), 3000);
}


/* PAGINATION */

// Create pagination
function loadPagination(nbPage, nbLimit) {
    // Charge la pagination selon la page et la limit
    $.ajax({
        url: 'get_pagination.php?page=' + nbPage + "&limit=" + nbLimit,
        method: "GET",
        dataType: 'json',
        success: function (response) {
            $('#dynamic-pagination').html(response);
        }
    });

    // Attend 100ms a repetition uniquement tant que le nb de btn dans la pagination est inférieur a 2
    setTimeout(function () {
        var nbBtn = document.querySelectorAll("#dynamic-pagination > ul > li").length;
        while (nbBtn < 1) {
            // Stop la boucle et la repetition de la function
            clearTimeout(this);
        }
        listenBtn(document.querySelector("#dynamic-pagination > ul > li:nth-last-child(2)").innerText);
        initplayer();
    }, 100);
}


// Ajout d'un listener sur tous les btn de pagination de la table
function listenBtn(maxBtn) {
    var btnPagination = document.querySelectorAll(".page-item");
    btnPagination.forEach(btn => {
        btn.addEventListener("click", function () {
            var btnValue = btn.innerText.trim();
            if (btnValue === "Previous") {
                if (nbPagesAct > 1) { nbPagesAct--; }
            }
            else if (btnValue === "Next") {
                if (nbPagesAct < maxBtn) { nbPagesAct++; }
            }
            else {
                nbPagesAct = btnValue;
            }
            loadPage(nbPagesAct, maxLimit);
        }, false);
    });
}

Init();