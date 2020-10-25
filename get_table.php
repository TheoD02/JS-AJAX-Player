<?php
// Connect to BDD
include('database.php');

$page = $_GET['page'];
$limit = $_GET['limit'];
$start_from = ($page-1) * $limit;  

// Get all data of table 'music'
$sql = "SELECT * FROM music ORDER BY id ASC LIMIT $start_from, $limit";  
$rs_result = mysqli_query($conn, $sql); 

$contents = '<table class="table table-striped table-dark">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Artiste - Titre</th>
        <th scope="col">Artiste de l\'édit/remix</th>
        <th scope="col">Type d\'édit (Remix / Bootleg/ Redrum etc...)</th>
        <th scope="col">Durée</th>
        <th scope="col">BPM</th>
        <th scope="col">Clé</th>
        <th scope="col">Action</th>
        <th scope="col">Date d\'ajouts</th>
    </tr>
</thead>
<tbody>';

while ($row = mysqli_fetch_array($rs_result)) {  
    $contents .= "<tr>";
    $contents .= '<td scope="row">' . $row["id"] . '</td>';
    $contents .= "<td>" . $row["titre"] . "</td>";
    $contents .= "<td>" . $row["artiste"] . "</td>";
    $contents .= "<td>Remix</td>";
    $contents .= "<td>0:00</td>";
    $contents .= "<td>100.00</td>";
    $contents .= "<td>1A</td>";
    $contents .= '<td><div class="playback"><i class="mdi mdi-play-circle-outline" url="' . $row["filepath"] . '"></i><a href="' . $row["filepath"] . '" download><i class="mdi mdi-download"></i></a><i class="mdi mdi-music-note-plus"></i></div></td>';
    $contents .= "<td>20 septembre 2020</td>";
    $contents .= "</tr>";
}

$contents .= "</tbody></table>";

echo json_encode($contents);
?>