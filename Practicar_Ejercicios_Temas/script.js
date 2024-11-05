

document.addEventListener("DOMContentLoaded",  () => {

    var video = document.getElementById('videoIniciar');
    console.log("He encotrnado el video UwU", video);

    //? video.play();
    //? video.remove();

    //Lo cambia al minuto que quiera
    //? video.currentTime = 0;
    //? video.play();

    //Lo resta
    //? video.currentTime -=5;
    //? video.play();

    // simplemente es un boolean true o false 
    //? video.muted = !video.muted;
    //? video.play()

    // Math.max(..., 0): Math.max toma dos valores y devuelve el mayor de los dos. 
    // En este caso, asegura que el volumen no baje de 0, de modo que, si la resta hace 
    // que el volumen sea negativo, se ajustará automáticamente a 0, evitando valores inválidos.
    //? video.volume = Math.max(parseFloat(video.volume) - 0.1, 0);

    //El video tiene que ser entre 0.1 a 1 que seria el máximo más de ahi no hace nada
    //? video.volume = 0.1
    //? video.play()
}, false);