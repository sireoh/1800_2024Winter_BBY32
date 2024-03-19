//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    document.getElementById("footerPlaceholder").innerHTML =
    `
    <footer class="lowernav">
        <ul>
            <li><a href="themes.html"><img src="/images/trophybutton.svg" alt="trophybutton"></a></li>
            <li><a href="journal.html"><img src="/images/diarybutton.svg" alt="diarybutton"></a></li>
            <li><a href="graphs.html"><img src="/images/graphbutton.svg" alt="graphbutton"></a></li>
        </ul>
    </footer>
    `;
}
loadSkeleton(); //invoke the function