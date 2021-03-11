var progrAudio = document.getElementById('seek-bar-audio');

window.onload = function () {

    if (localStorage.getItem('punts'))
        punts = JSON.parse(localStorage.getItem('punts'));

    var audio = new Audio();

    let close = document.getElementById('close');
    close.onclick = function () { document.location.href = "index.html"; }


    //SELECCIONAR OCELL DE FORMA RANDOM
    var regioC = Math.floor((Math.random() * 8) + 0);
    var ocellC = Math.floor((Math.random() * 3) + 0);

    //DADES DE L'OCELL CORRECTE
    let ocellCorrecte = {

        "nom": dades[regioC].ocells[ocellC]["nom"],
        "img": dades[regioC].ocells[ocellC]["imatges"],
        "audio": dades[regioC].ocells[ocellC]["audio"]
    };

    //DADES DE L'OCELL INCORRECTE 1
    var regioF1 = Math.floor((Math.random() * 8) + 0);
    var ocellF1 = Math.floor((Math.random() * 3) + 0);

    let ocellInCor1 = {

        "nom": dades[regioF1].ocells[ocellF1]["nom"],
        "img": dades[regioF1].ocells[ocellF1]["imatges"]
    };

    //DADES DE L'OCELL INCORRECTE 2
    var regioF2 = Math.floor((Math.random() * 8) + 0);
    var ocellF2 = Math.floor((Math.random() * 3) + 0);

    let ocellInCor2 = {

        "nom": dades[regioF2].ocells[ocellF2]["nom"],
        "img": dades[regioF2].ocells[ocellF2]["imatges"]
    };




    //POSAR ELS OCELLS A LA PANTALLA

    //let o1 = document.getElementById('ocell1');
    let imgOc1 = document.getElementById('img-o1-t');
    let pOc1 = document.getElementById('p-o1-t');

    //let o2 = document.getElementById('ocell2');
    let imgOc2 = document.getElementById('img-o2-t');
    let pOc2 = document.getElementById('p-o2-t');

    //let o3 = document.getElementById('ocell3');
    let imgOc3 = document.getElementById('img-o3-t');
    let pOc3 = document.getElementById('p-o3-t');

    let llista = [ocellCorrecte, ocellInCor1, ocellInCor2];

    function getRandomElements(list) { //https://www.youtube.com/watch?v=SYLD5qz7buQ
        return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3)
    }

    let posOcells = getRandomElements(llista);

    let ocellPos1 = posOcells[0];
    let ocellPos2 = posOcells[1];
    let ocellPos3 = posOcells[2];

    pOc1.textContent = ocellPos1.nom;
    imgOc1.src = ocellPos1.img;

    pOc2.textContent = ocellPos2.nom;
    imgOc2.src = ocellPos2.img;

    pOc3.textContent = ocellPos3.nom;
    imgOc3.src = ocellPos3.img;

    audio.src = ocellCorrecte.audio;


    let targetaF = document.getElementById("targetaFinal");
    let textTF = document.getElementById("textFinal");
    let botoTF = document.getElementById("closeTargeta");


    //OPCIONS DEL TEST
    document.getElementById("ocell1").addEventListener('click', function () {

        if (pOc1.textContent == ocellCorrecte.nom) {
            punts++;
            localStorage.setItem('punts', JSON.stringify(punts));
            targetaF.style.display = "inline";
            if (punts == 1) {
                textTF.textContent = "Felicitats! Tens " + punts + " punt!";
            } else {
                textTF.textContent = "Felicitats! Tens " + punts + " punts!";
            }
            botoTF.textContent = "Fer un altre test"
            botoTF.addEventListener("click", nouTest);
        } else {
            targetaF.style.display = "inline";
            textTF.textContent = "Has fallat...";
            botoTF.textContent = "Tornar-ho a intentar"
            botoTF.addEventListener("click", tancarTF);
        }

    });

    document.getElementById("ocell2").addEventListener('click', function () {

        if (pOc2.textContent == ocellCorrecte.nom) {
            punts++;
            localStorage.setItem('punts', JSON.stringify(punts));
            targetaF.style.display = "inline";
            if (punts == 1) {
                textTF.textContent = "Felicitats! Tens " + punts + " punt!";
            } else {
                textTF.textContent = "Felicitats! Tens " + punts + " punts!";
            }
            botoTF.textContent = "Fer un altre test"
            botoTF.addEventListener("click", nouTest);
        } else {
            targetaF.style.display = "inline";
            textTF.textContent = "Has fallat...";
            botoTF.textContent = "Tornar-ho a intentar"
            botoTF.addEventListener("click", tancarTF);
        }

    });

    document.getElementById("ocell3").addEventListener('click', function () {

        if (pOc3.textContent == ocellCorrecte.nom) {
            punts++;
            localStorage.setItem('punts', JSON.stringify(punts));
            targetaF.style.display = "inline";
            if (punts == 1) {
                textTF.textContent = "Felicitats! Tens " + punts + " punt!";
            } else {
                textTF.textContent = "Felicitats! Tens " + punts + " punts!";
            }
            botoTF.textContent = "Fer un altre test"
            botoTF.addEventListener("click", nouTest);
        } else {
            targetaF.style.display = "inline";
            textTF.textContent = "Has fallat...";
            botoTF.textContent = "Tornar-ho a intentar"
            botoTF.addEventListener("click", tancarTF);
        }

    });



    function nouTest() {
        window.location.reload();
        targetaF.style.display = "none";
    }
    function tancarTF() {
        targetaF.style.display = "none";
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////

    //CODI PER FER FUNCIONAR EL PLAYER D'ÀUDIO

    //FUNCIÓ DE PLAY/PAUSA DE L'ÀUDIO
    document.getElementById("play-audio").addEventListener('click', function () {

        if (audio.paused) {
            this.innerHTML = "&#9612;&#9612;" //SÍMBOL DE PAUSA
            audio.play(); //INICIAR EL VÍDEO

        } else if (audio.ended) { //QUAN EL VÍDEO ARRIBI AL FINAL, ES TORNA A POSICIONAR A L'INICI
            stopAudio();

        } else {
            audio.pause(); //QUAN ES PAUSA EL VÍDEO, ES POSA EL SÍMBOL DE PLAY
            this.innerHTML = "&#9658;";
        }

    });

    //CRIDA DE LA FUNCIÓ STOP
    document.getElementById("stop-audio").addEventListener('click', stopAudio);

    //FUNCIÓ PER ATURAR L'ÀUDIO
    function stopAudio() {
        audio.currentTime = 0;
        audio.pause();
        document.getElementById("play-audio").innerHTML = "&#9658;";
        progrAudio.value = 0;
    }

    //CADA VEGADA QUE L'ÀUDIO AVANÇA, CALCULO LA POSICIÓ I LA VISUALITZO A LA BARRA DE PROGRÉS
    audio.addEventListener("timeupdate", function () {
        var position = audio.currentTime / audio.duration;

        if (isNaN(position)) { //SI HI HA ALGUN ERROR DE NaN, L'EVITO AMB AQUESTA CONDICIÓ
            return;
        }

        progrAudio.value = position * 100;


        if (audio.ended) {
            stopAudio();
        }

        posicionarAudio(); //CRIDO LA FUNCIÓ POSICIONARVÍDEO()



    })

    //CADA VEGADA QUE ES FA CLIC A LA BARRA DE PROGRÉS, CALCULO LA POSICIÓ I LA VISUALITZO A LA BARRA DE PROGRÉS
    document.getElementById("seek-bar-audio").addEventListener('click',
        function (event) {

            var duradaTotal = audio.duration;

            // 1) mirar en quina posicio de la barra he clicat respecte el total de la barra
            var posicioBarraClicada = event.offsetX / this.offsetWidth * this.max;
            // 2) segons la dada anterior, calculo a quin instant de cançó estic
            var novaPosicioAudio = posicioBarraClicada * duradaTotal / this.max;
            // 3) canvio CurrentTime de cançó
            audio.currentTime = novaPosicioAudio;


            document.getElementById("seek-bar-audio").value = novaPosicioAudio;


        });

    //event de baixar el volum
    document.getElementById("lessVol-audio").addEventListener('click',
        function () {
            if (audio.volume > 0) {
                audio.volume = audio.volume - 0.1;
            }
        });
    //event de pujar el volum
    document.getElementById("moreVol-audio").addEventListener('click',
        function () {
            if (audio.volume < 1) {
                audio.volume = audio.volume + 0.1;
            }
        });

    //CALCULO ELS SEGONS DE L'ÀUDIO I ELS POSO EN FORMAT MM:SS
    function posicionarAudio() {
        var curtimetextA = document.getElementById("curtimetext-audio");
        var durtimetextA = document.getElementById("durtimetext-audio");

        var nt = audio.currentTime * (100 / audio.duration);
        progrAudio.value = nt;
        var curminsA = Math.floor(audio.currentTime / 60);
        var cursecsA = Math.floor(audio.currentTime - curminsA * 60);
        var durminsA = Math.floor(audio.duration / 60);
        var dursecsA = Math.floor(audio.duration - durminsA * 60);
        if (cursecsA < 10) { cursecsA = "0" + cursecsA; }
        if (dursecsA < 10) { dursecsA = "0" + dursecsA; }
        if (curminsA < 10) { curminsA = "0" + curminsA; }
        if (durminsA < 10) { durminsA = "0" + durminsA; }
        curtimetextA.innerHTML = curminsA + ":" + cursecsA;
        durtimetextA.innerHTML = durminsA + ":" + dursecsA;

        document.getElementById("volume-audio").innerText = Math.ceil(audio.volume * 100);
    }

    if (audio.readyState >= audio.HAVE_METADATA) {
        posicionarAudio();
    } else {
        audio.addEventListener('loadedmetadata', posicionarAudio)
    }


}