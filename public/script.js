document.addEventListener("DOMContentLoaded", () => {


});



function testDisponibilite(id, submitBTN) {
    const element = document.getElementById(id);
    const destination = document.getElementById("destination");
    const checkH = document.getElementById("checkH");

    if (destination.value === "Foix" && element.value < 5) {
        alert("Le voyage à Foix n’est disponible que pour 5 personnes ou plus.");
        return false;
    }

    if (checkH.checked && element.value > 2) {
        alert("Le mode de paiement « Chèques vacances » n’est possible que pour 1 ou 2 personnes.");
        return false;
    }

    if (element && parseInt(element.value) <= 0) {
        alert("Le nombe de personne doit être suppérieur à 0");
        return false;
    }
    if (element && parseInt(element.value) > 20) {
        alert("Le nombre de participants à un voyage ne peux pas dépasser 20 personnes.");
        return false;
    }
    if (!element.value) {
        alert("Le nombe de personne doit être un nombre positif");
        return false;
    }
    else {
        if (submitBTN) {
            const date = new Date();
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const hour = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            confirm("Souhetez-vous confirmer ?")
            alert(`Nous confirmons avoir bien reçu votre réservation le ${day}/${month}/${year} à ${hour}:${minutes}.`) 
            return true
        }
        alert("La destination est disponible");
        return true;
    }

}

function afficherIBAN() {
    document.getElementById("ibanContainer").style.display = "block";


}

function cacherIBAN() {
    document.getElementById("ibanContainer").style.display = "none";
}