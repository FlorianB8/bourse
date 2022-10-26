document.getElementById("reservation").addEventListener("click", myFunction);

function myFunction() {
window.alert("Redirection vers un formulaire de réservation")
}


document.getElementById("inscription").addEventListener("click", myFunction2);

function myFunction2() {
    window.alert("Redirection vers un formulaire d'inscription")
    }


document.getElementById("connection").addEventListener("click", myFunction3);

function myFunction3() {
    window.alert("Redirection vers un formulaire de connection")
    document.location.href="oops.html"
    }

document.getElementById("back").addEventListener("click", myFunction4);

function myFunction4() {
    document.location.href="index.html"
    }
