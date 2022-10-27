// Action nav réservation

document.getElementById("reservation").addEventListener("click", foncReservation);

function foncReservation() {
    window.alert("Redirection vers un formulaire de réservation")
    };


// Action nav inscription

document.getElementById("inscription").addEventListener("click", foncInscription);

function foncInscription() {
    window.alert("Redirection vers un formulaire d'inscription")
    };


// Action nav blog

document.getElementById("blog").addEventListener("click", foncBlog);

function foncBlog() {   
    window.alert("Redirection vers le blog")
    document.location.href="oops.html"
     };


//  Action nav contact

document.getElementById("contact").addEventListener("click", foncContact);

function foncContact() {
    window.alert("Redirection vers un formulaire de contact")
    document.location.href="oops.html"
    };


// Action nav connexion 

document.getElementById("connection").addEventListener("click", foncConnection);

function foncConnection() {
    document.location.href="connexion.html"
    };


// Action revenir 

document.getElementById("back").addEventListener("click", foncReturn);

function foncReturn() {
    document.location.href="index.html"
    };



