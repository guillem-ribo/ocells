window.onload = function () {

    document.getElementById('regio-ebre').addEventListener('click',salta);
    document.getElementById('regio-ivars').addEventListener('click',salta);
    document.getElementById('regio-capdecreus').addEventListener('click',salta);
    document.getElementById('regio-montserrat').addEventListener('click',salta);
    document.getElementById('regio-aiguestortes').addEventListener('click',salta);
    document.getElementById('regio-cadi').addEventListener('click',salta);
    document.getElementById('regio-nuria').addEventListener('click',salta);
    document.getElementById('regio-llobregat').addEventListener('click',salta);


    function salta() {

        let sel = this.id;
        document.location.href="detall.html?sel="+sel;

    }

    document.getElementById("test").addEventListener('click',salta2);

    function salta2() {

        document.location.href="test.html";
    }

    if (localStorage.getItem('punts')) {
        punts = JSON.parse(localStorage.getItem('punts'));
    }

    function mostrarPunts() {document.getElementById("numPunts").textContent = "Punts: " + punts;}
    
    mostrarPunts();

    let targetaE = document.getElementById("targeta-esborrar");
    let botoE = document.getElementById("closeTargeta");

    document.getElementById("reset").addEventListener('click',resetejar);

    function resetejar() {
        localStorage.removeItem('dades');
        localStorage.removeItem('punts');
        punts = 0;
        mostrarPunts();
        
        targetaE.style.display = "inline";
        botoE.addEventListener("click", function() {
            targetaE.style.display = "none";
        });
    }

    


    
}
