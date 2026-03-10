function hacerCalculo() {
    
    var paquete = parseInt(document.getElementById("selPaquete").value);
    var auto = parseInt(document.getElementById("selAuto").value);
    
    var total = paquete + auto;
    var divRes = document.getElementById("resTotal");
    
    divRes.style.display = "block";
    divRes.innerHTML = "Total a invertir: S/ " + total + ".00";
}

document.getElementById("formMatricula").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nomUser").value;

    alert("¡Muchas gracias " + nombre + "! Tu solicitud fue enviada correctamente. Pronto nos contactaremos contigo.");
    this.reset();
});