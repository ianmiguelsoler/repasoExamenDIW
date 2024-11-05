"use strict";

const almacenamientoVideos = [
    "https://www.w3schools.com/tags/movie.mp4",
    "https://www.w3schools.com/tags/movie.ogg"
];

const almacenamientoAudio = [
    "../audio/toc-puerta 1.mp3",
    "../audio/cobaya_1.mp3",
    "../audio/cobaya_2.mp3",
    "../audio/mario_bros.mp3",
];

document.addEventListener("DOMContentLoaded", function() {
    const videosMp4 = document.querySelectorAll("video");

    if (videosMp4.length > 0) {
        for (let i = 0; i < videosMp4.length; i++) {
            videosMp4[i].src = almacenamientoVideos[0];
            // Recargamos el video con la nueva fuente
            videosMp4[i].load();
        }
    } else {
        console.error("No hay ningún video mp4");
    }

    // Seleccionamos el video específico con el id #video_ogg
    const videoOgg = document.getElementById("video_ogg");
    if (videoOgg) {
        videoOgg.src = almacenamientoVideos[1];
        videoOgg.load();
    } else {
        console.error("No hay ningún video ogg");
    }
});


const audio = (numero) => {

        let reproducir = document.getElementById("reproductorAudio");

    switch(numero){
        case 1:
            reproducir.src = almacenamientoAudio[0];
            break;
        case 2:
            reproducir.src = almacenamientoAudio[1];
            break;
        case 3:
            reproducir.src = almacenamientoAudio[2];
            break;
        case 4:
            reproducir.src = almacenamientoAudio[3];
            break;
        default:
            console.log("Audio no disponible");
            return;
       
    }
    reproductor.play();
}

const controladorDeVideo = (accion) => {
    var video = document.getElementById('videoElement');
    var volumen =document.getElementById('volumenVideo').innerText = `Volumen actual: ${video.volume.toFixed(1)}`;
    
    if (accion === 'iniciar') {
        video.play();
    } else if (accion === 'pausar') {
        video.pause();
    } else if (accion === 'reiniciar') {
        video.currentTime = 0;
        video.play();
    } else if (accion === 'retrasar') {
        video.currentTime -=5;
        video.play();
    } else if (accion === 'adelantar') {
        video.currentTime += 5;
        video.play();
    } else if (accion === 'silenciar') {
        video.muted = !video.muted;
        document.getElementById('botonSilenciar').innerText = video.muted ? 'Escuchar' : 'Silenciar';
    } else if (accion === 'bajarVolumen') {
        if (video.volume > 0) {
            video.volume = Math.max(parseFloat(video.volume) - 0.1, 0);
            volumen = `Volumen actual: ${video.volume.toFixed(1)}`;
        }
    } else if (accion === 'subirVolumen') {
        if (video.volume < 1) {
            video.volume = Math.max(parseFloat(video.volume) + 0.1, 0);
            volumen = `Volumen actual: ${video.volume.toFixed(1)}`;
        }
    } 
}
