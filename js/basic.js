var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}          
function showPage() {
    document.getElementById("loader").style.display = "none";
    if(window.location.pathname == "/index.html") {
                                //"/Project-3/index.html" for GitHub
        document.getElementById("home-page").style.display = "block";
    }
    else if (window.matchMedia("(max-width: 720px)").matches) {
        document.getElementById("container").style.display = "flex";
    }
    else{
        document.getElementById("container").style.display = "grid";
    }
}
