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
        'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
        'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
        'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
        'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
        'linear-gradient(to top, #00c6fb 0%, #005bea 100',
        'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'
    ];
    var color = letters[Math.floor(Math.random() * letters.length)];
    return color;

}

function changeColor() {
    change.style.background = getRandomColor();
}
setInterval(changeColor, 10000);
