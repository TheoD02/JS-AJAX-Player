<?php
// Connect to BDD
include('database.php');

$page = 1;
$limit = 10; 
$start_from = ($page-1) * $limit;  

// Get all data of table 'music'
$sql = "SELECT * FROM music ORDER BY id ASC LIMIT $start_from, $limit";  
$rs_result = mysqli_query($conn, $sql);  


$contents = '<table class="table">
<thead>
    <tr>
        <th scope="col">#</th>
        <th>Artiste - Titre</th>
        <th>Artiste de l\'édit/remix</th>
        <th>Type d\'édit (Remix / Bootleg/ Redrum etc...)</th>
        <th>Durée</th>
        <th>BPM</th>
        <th>Clé</th>
        <th>Action</th>
        <th>Date d\'ajouts</th>
    </tr>
</thead>
<tbody>';

while ($row = mysqli_fetch_array($rs_result)) {  
    $contents .= "<tr>";
    $contents .= "<td>" . $row["id"] . "</td>";
    $contents .= "<td>" . $row["titre"] . "</td>";
    $contents .= "<td>" . $row["artiste"] . "</td>";
    $contents .= "<td>Remix</td>";
    $contents .= "<td>0:00</td>";
    $contents .= "<td>100.00</td>";
    $contents .= "<td>1A</td>";
    $contents .= '<td><div id="playback"><i class="mdi mdi-play-circle-outline" url="' . $row["filepath"] . '"></i><i class="mdi mdi-download"></i><i class="mdi mdi-music-note-plus"></i></div></td>';
    $contents .= "<td>20 septembre 2020</td>";
    $contents .= "</tr>";
}

$contents .= "</tbody></table>";
echo json_encode($contents);
?>