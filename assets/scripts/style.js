$(document).ready(function() {
    //will scroll down on arrow down button click
    $('.ct-btn-scroll').click(function() {
        $('html,body').animate({
            scrollTop: $("#meBaby").offset().top
        }, 'slow');
        //will hode button after click
        $('.ct-btn-scroll').hide(1000);
    });
});


var change = document.getElementById("meBaby"); // add to the top

function getRandomColor() {
    var letters = ['linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
    ];

    var color = letters[Math.floor(Math.random() * letters.length)];

    return color;

}

function changeColor() {
    change.style.background = getRandomColor();
}
setInterval(changeColor, 10000);
