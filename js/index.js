window.addEventListener('load', () => {

    //buttons
    var about = document.querySelector('#about');
    var video = document.querySelector('#video');
    var music = document.querySelector('#music');
    var git = document.querySelector('#git');
    //Divs
    var div = document.querySelector('#display1');
    var divtwo = document.querySelector('#viewvi');
    var mu = document.querySelector('#viewa');
    var mostrar = document.querySelector('#gis');

    var str = "GitHub-Tarea_01";
    var result = str.link("https://github.com/Makarov96/Tarea01_Progra_Web");

    about.addEventListener('click', () => {
        div.style.display = "block";
        divtwo.style.display = "none";
        mostrar.style.display = "none";
        mu.style.display = "none";
    });

    video.addEventListener('click', () => {

        div.style.display = "none";
        divtwo.style.display = "block";
        mostrar.style.display = "none";
        mu.style.display = "none";

    });

    music.addEventListener('click', () => {
        div.style.display = "none";
        divtwo.style.display = "none";
        mostrar.style.display = "none";
        mu.style.display = "block";

    });
    git.addEventListener('click', () => {
        div.style.display = "none";
        divtwo.style.display = "none";
        mu.style.display = "none";
        mostrar.style.display = "block";
        mostrar.innerHTML = result;


    });

});