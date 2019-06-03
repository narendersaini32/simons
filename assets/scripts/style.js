$(document).ready(function() {
    //will scroll down on arrow down button click
    $('.ct-btn-scroll').click(function() {
        $('html,body').animate({
                scrollTop: $("#meBaby").offset().top
            },
            'slow');
            $('.ct-btn-scroll').hide(1000);
    });
});


var change = document.getElementById("meBaby"); // add to the top

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    change.style.backgroundColor = getRandomColor();
}

setInterval(changeColor, 10000);
