var video = document.getElementById('video');
var progr = document.getElementById('seek-bar');

var progrAudio = document.getElementById('seek-bar-audio');
var audio = new Audio();


window.onload = function () {

    let urlParams = new URLSearchParams(window.location.search);
    let recollit = urlParams.get('sel');

    //TANCAR FINESTRA DETALL

    let close = document.getElementById('close');
    close.onclick = function () { document.location.href = "index.html"; }



    //TROBAR A LA LLISTA LA REGIÓ QUE S'HA ESCOLLIT
    let llistaRegions = ["regio-ebre", "regio-ivars", "regio-capdecreus", "regio-montserrat", "regio-aiguestortes", "regio-cadi", "regio-nuria", "regio-llobregat"];

    let regioSeleccio = llistaRegions.indexOf(recollit); //SABER EL NÚM. DE LLISTA AL QUE PERTANY
    posarContingut(regioSeleccio); //PASSAR EL NÚM. DE LLISTA A LA FUNCIÓ POSARCONTINGUT()

    //RESTAURAR DADES DE LOCALSTORAGE
    if (localStorage.getItem('dades'))
        dades = JSON.parse(localStorage.getItem('dades'));


    //PASSAR SELECCIÓ I MOSTRAR CONTINGUT PROPI DE LA PÀGINA DETALL
    function posarContingut(numSelec) {

        let selec; //VARIABLE QUE ENS DIU QUIN OCELL ESTÀ SELECCIONAT


        //POSAR DADES BÀSIQUES DE LA PÀGINA DETALL
        document.getElementById('ts').textContent = dades[numSelec].nom;

        let habitatDetall = document.getElementById("habitat");

        habitatDetall.textContent = "Tipus d'hàbitat: " + dades[numSelec].habitat;

        document.getElementById("descripcio").textContent = dades[numSelec].descripcio;

        //POSO NOM ALS BOTONS D'OCELL SEGONS ELS QUE HI HA A L'OBJECTE REGIÓ SELECCIONAT
        document.getElementById("img-detall").src = dades[numSelec].imatges[0];

        document.getElementById("btn1").textContent = dades[numSelec].ocells[0]["nom"];

        document.getElementById("btn2").textContent = dades[numSelec].ocells[1]["nom"];

        document.getElementById("btn3").textContent = dades[numSelec].ocells[2]["nom"];

        //POSAR DADES DE L'OCELL 1 (POSICIÓ 0 DE LA LLISTA)
        document.getElementById("nom-ocell").textContent = dades[numSelec].ocells[0]["nom"];
        document.getElementById("nom-c-ocell").textContent = dades[numSelec].ocells[0]["nom-c"];
        document.getElementById("residencia").textContent = dades[numSelec].ocells[0]["residencia"];
        document.getElementById("abundancia").textContent = dades[numSelec].ocells[0]["abundancia"];
        document.getElementById("img-o").src = dades[numSelec].ocells[0]["imatges"];
        document.getElementById("ocellSelected").textContent = "Ocell seleccionat: " + dades[numSelec].ocells[0]["nom"];


        //accedir a la meva variable de video
        video.src = dades[numSelec].ocells[0].video;
        //carrego temps de reproducció del primer vídeo
        video.currentTime = dades[numSelec].ocells[0].time;

        audio.src = dades[numSelec].ocells[0].audio;
        stopAudio();

        //POSO LES DADES DE L'OCELL SEGONS SI EM TRIEN EL 1R, EL 2N O EL 3R
        document.getElementById("btn1").addEventListener('click', function () {
            selec = 0; //L'OCELL SELECCIONAT ÉS EL DE LA POSICIÓ 0 DE LA LLISTA D'OCELLS
            video.src = dades[numSelec].ocells[selec].video; //CARREGO EL VÍDEO DE L'OCELL 0
            stop(); //FAIG STOP PERQUÈ NO EM POSI ELS SEGONS D'UN ALTRE VÍDEO

            //CARREGO DADES DE L'OCELL SELECCIONAT
            document.getElementById("ocellSelected").textContent = "Ocell seleccionat: " + dades[numSelec].ocells[selec]["nom"];
            document.getElementById("nom-ocell").textContent = dades[numSelec].ocells[selec]["nom"];
            document.getElementById("nom-c-ocell").textContent = dades[numSelec].ocells[selec]["nom-c"];
            document.getElementById("residencia").textContent = dades[numSelec].ocells[selec]["residencia"];
            document.getElementById("abundancia").textContent = dades[numSelec].ocells[selec]["abundancia"];
            document.getElementById("img-o").src = dades[numSelec].ocells[selec]["imatges"];

            //POSO L'ÀUDIO DE L'OCELL SELECCIONAT
            audio.src = dades[numSelec].ocells[selec].audio;
            stopAudio();

            //POSAR EL VÍDEO AL TEMPS QUE HA GUARDAT EL LOCALSTORAGE
            video.currentTime = dades[numSelec].ocells[selec].time;

            //GUARDAR AL LOCALSTORAGE CADA VEGADA ELS SEGONS PER ON VA EL VÍDEO
            video.addEventListener("timeupdate", function () { dades[numSelec].ocells[selec].time = video.currentTime; })
            localStorage.setItem('dades', JSON.stringify(dades));

        });


        //POSO LES DADES DE L'OCELL SEGONS SI EM TRIEN EL 1R, EL 2N O EL 3R
        document.getElementById("btn2").addEventListener('click', function () {
            selec = 1;
            video.src = dades[numSelec].ocells[selec].video;
            document.getElementById("ocellSelected").textContent = "Ocell seleccionat: " + dades[numSelec].ocells[selec]["nom"];
            stop();
            document.getElementById("nom-ocell").textContent = dades[numSelec].ocells[selec]["nom"];
            document.getElementById("nom-c-ocell").textContent = dades[numSelec].ocells[selec]["nom-c"];
            document.getElementById("residencia").textContent = dades[numSelec].ocells[selec]["residencia"];
            document.getElementById("abundancia").textContent = dades[numSelec].ocells[selec]["abundancia"];
            document.getElementById("img-o").src = dades[numSelec].ocells[selec]["imatges"];

            //POSO L'ÀUDIO DE L'OCELL SELECCIONAT
            audio.src = dades[numSelec].ocells[selec].audio;
            stopAudio();

            //POSAR EL VÍDEO AL TEMPS QUE HA GUARDAT EL LOCALSTORAGE
            video.currentTime = dades[numSelec].ocells[selec].time;

            video.addEventListener("timeupdate", function () { dades[numSelec].ocells[selec].time = video.currentTime; })
            localStorage.setItem('dades', JSON.stringify(dades));

        });

        //POSO LES DADES DE L'OCELL SEGONS SI EM TRIEN EL 1R, EL 2N O EL 3R
        document.getElementById("btn3").addEventListener('click', function () {
            selec = 2;
            video.src = dades[numSelec].ocells[selec].video;
            document.getElementById("ocellSelected").textContent = "Ocell seleccionat: " + dades[numSelec].ocells[selec]["nom"];
            stop();
            document.getElementById("nom-ocell").textContent = dades[numSelec].ocells[selec]["nom"];
            document.getElementById("nom-c-ocell").textContent = dades[numSelec].ocells[selec]["nom-c"];
            document.getElementById("residencia").textContent = dades[numSelec].ocells[selec]["residencia"];
            document.getElementById("abundancia").textContent = dades[numSelec].ocells[selec]["abundancia"];
            document.getElementById("img-o").src = dades[numSelec].ocells[selec]["imatges"];

            //POSO L'ÀUDIO DE L'OCELL SELECCIONAT
            audio.src = dades[numSelec].ocells[selec].audio;
            stopAudio();

            //POSAR EL VÍDEO AL TEMPS QUE HA GUARDAT EL LOCALSTORAGE
            video.currentTime = dades[numSelec].ocells[selec].time;

            video.addEventListener("timeupdate", function () { dades[numSelec].ocells[selec].time = video.currentTime; })
            localStorage.setItem('dades', JSON.stringify(dades));

        });

    }

    var playGran = document.getElementById("playGran");

    playGran.addEventListener('click', function () {

        fPlayVideo();

        this.style.display = "none";
        document.getElementById("play").innerHTML = "&#9612;&#9612;";

    });


    //FUNCIÓ DE PLAY/PAUSA DEL VÍDEO
    document.getElementById("play").addEventListener('click', fPlayVideo);
    
    function fPlayVideo() {

        if (video.paused) {
            this.innerHTML = "&#9612;&#9612;"; //SÍMBOL DE PAUSA
            video.play(); //INICIAR EL VÍDEO

            playGran.style.display = "none";

        } else if (video.ended) { //QUAN EL VÍDEO ARRIBI AL FINAL, ES TORNA A POSICIONAR A L'INICI
            stop();

        } else {
            video.pause(); //QUAN ES PAUSA EL VÍDEO, ES POSA EL SÍMBOL DE PLAY
            this.innerHTML = "&#9658;";
            playGran.style.display = "inline";
        }

    }



    //CRIDA DE LA FUNCIÓ STOP
    document.getElementById("stop").addEventListener('click', stop);

    //FUNCIÓ PER ATURAR EL VÍDEO
    function stop() {
        video.currentTime = 0;
        video.pause();
        document.getElementById("play").innerHTML = "&#9658;";
        progr.value = 0;
        playGran.style.display = "inline";
    }




    //CADA VEGADA QUE EL VÍDEO AVANÇA, CALCULO LA POSICIÓ I LA VISUALITZO A LA BARRA DE PROGRÉS
    video.addEventListener("timeupdate", function () {
        var position = video.currentTime / video.duration;

        if (isNaN(position)) { //SI HI HA ALGUN ERROR DE NaN, L'EVITO AMB AQUESTA CONDICIÓ
            return;
        }

        progr.value = position * 100;


        if (video.ended) {
            stop();
        }

        posicionarVideo(); //CRIDO LA FUNCIÓ POSICIONARVÍDEO()



    })



    //CADA VEGADA QUE ES FA CLIC A LA BARRA DE PROGRÉS, CALCULO LA POSICIÓ I LA VISUALITZO A LA BARRA DE PROGRÉS
    document.getElementById("seek-bar").addEventListener('click',
        function (event) {

            var duradaTotal = video.duration;

            // 1) mirar en quina posicio de la barra he clicat respecte el total de la barra
            var posicioBarraClicada = event.offsetX / this.offsetWidth * this.max;
            // 2) segons la dada anterior, calculo a quin instant de cançó estic
            var novaPosicioVideo = posicioBarraClicada * duradaTotal / this.max;
            // 3) canvio CurrentTime de cançó
            video.currentTime = novaPosicioVideo;


            document.getElementById("seek-bar").value = novaPosicioVideo;


        }
    );




    //event de baixar el volum
    document.getElementById("lessVol").addEventListener('click',
        function () {
            if (video.volume > 0) {
                video.volume = video.volume - 0.1;
            }
        });
    //event de pujar el volum
    document.getElementById("moreVol").addEventListener('click',
        function () {
            if (video.volume < 1) {
                video.volume = video.volume + 0.1;
            }
        });



    //CALCULO ELS SEGONS DEL VÍDEO I ELS POSO EN FORMAT MM:SS
    function posicionarVideo() {
        var curtimetext = document.getElementById("curtimetext");
        var durtimetext = document.getElementById("durtimetext");

        var nt = video.currentTime * (100 / video.duration);
        progr.value = nt;
        var curmins = Math.floor(video.currentTime / 60);
        var cursecs = Math.floor(video.currentTime - curmins * 60);
        var durmins = Math.floor(video.duration / 60);
        var dursecs = Math.floor(video.duration - durmins * 60);
        if (cursecs < 10) { cursecs = "0" + cursecs; }
        if (dursecs < 10) { dursecs = "0" + dursecs; }
        if (curmins < 10) { curmins = "0" + curmins; }
        if (durmins < 10) { durmins = "0" + durmins; }
        curtimetext.innerHTML = curmins + ":" + cursecs;
        durtimetext.innerHTML = durmins + ":" + dursecs;

        document.getElementById("volume").innerText = Math.ceil(video.volume * 100);
    }


    //esperar a l'event de metadades carregades
    //NO INTENTO ACCEDIR ENLLOC DE L'AUDIO/VIDEO fins que no s'han carregat les metadades
    if (video.readyState >= video.HAVE_METADATA) {
        posicionarVideo();
    } else {
        video.addEventListener('loadedmetadata', posicionarVideo)
    }









    /*ÀUDIOS*/

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
        progr.value = 0;
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