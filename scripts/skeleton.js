//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    document.getElementById("navPlaceholder").innerHTML =
    `
    <a href="javascript:void(0);" onclick="goBack()"><i class="fa-solid fa-circle-arrow-left"></i></a>
    <a href="#">Mindful Minute</a>
    <span id="currentAmtOfMoney"></span>
    <a href="themes.html"><i class="fa-solid fa-coins"></i></a>
    `;
    document.getElementById("footerPlaceholder").innerHTML =
    `
    <a href="journal.html"><i class="fa-solid fa-book"></i></a>
    <a href="main.html"><i class="fa-solid fa-home"></i></a>
    <a href="graphs.html"><i class="fa-solid fa-chart-column"></i></a>
    `;
}

function goBack() {
    window.history.back();
}

loadSkeleton(); //invoke the function
