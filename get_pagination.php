<?php
// Connect to BDD
include('database.php');

$cur_page = $_GET['page'];
$limit = $_GET['limit'];


$sql = "SELECT COUNT(id) FROM music";
$rs_result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($rs_result);
$total_records = $row[0];
$total_pages = ceil($total_records / $limit);

$contents = '<ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link">Previous</a></li>';
if (!empty($total_pages)) {
    $pageapresactive = $cur_page;
    $pageavantactive = $cur_page;
    $maxpages = 10;
    $minpages = 1;
    if ($cur_page > 1) {
        $minpages = 2;
        if ($cur_page == 2) {
            $maxpages--;
        } else {
            $maxpages -= 2;
        }
    }
    $diff = $cur_page + $maxpages;
    if ($diff > $total_pages) {
        $diff -= $total_pages;
        $minpages = $minpages + $diff - 1;
    }

    for ($a = 1; $a <= $maxpages; $a++) {
        if ($pageapresactive <= $total_pages) {
            $pageapresactive++;
        } else {
            break;
        }
    }
    for ($a = 1; $a <= $minpages; $a++) {
        if ($pageavantactive > 1) {
            $pageavantactive--;
        } else {
            break;
        }
    }

    for ($i = $pageavantactive; $i < $cur_page; $i++) {
        $contents .= '<li class="page-item nb_size"><a class="page-link">' . $i . '</a></li>';
    }
    $contents .= '<li class="page-item active nb_size"><a class="page-link">' . $cur_page . '</a></li>';
    for ($i = $cur_page + 1; $i < $pageapresactive; $i++) {
        $contents .= '<li class="page-item nb_size"><a class="page-link">' . $i . '</a></li>';
    }
}

$contents .= '<li class="page-item"><a class="page-link">Next</a></li>
</ul>';

//Debug
/*$contents .= 'pageapresactive : ' . $pageapresactive;
$contents .= '<br>pageavantactive : ' . $pageavantactive;
$contents .= '<br>maxpages : ' . $maxpages;
$contents .= '<br>minpages : ' . $minpages;
$contents .= '<br>cur_page : ' . $cur_page;
$contents .= '<br>total_pages : ' . $total_pages;
$contents .= '<br>diff : ' . $diff;*/
echo json_encode($contents);
