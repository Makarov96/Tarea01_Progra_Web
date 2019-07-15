window.addEventListener('load', () => {

    var about = document.querySelector('#about');
    var video = document.querySelector('#video');
    var music = document.querySelector('#music');
    var div = document.querySelector('#display1');
    var divtwo = document.querySelector('#viewvi');

    about.addEventListener('click', () => {
        div.style.display = "block";
        divtwo.style.display = "none"
    });

    video.addEventListener('click', () => {

        div.style.display = "none";
        divtwo.style.display = "block"

    });



    music.addEventListener('click', () => {

    });

});