$(document).ready(function(){
   
  $('.ct-btn-scroll').click(function(){
      $('html,body').animate({
        scrollTop: $("#meBaby").offset().top},
        'slow');
  });
});


var change = document.getElementById("meBaby");// add to the top

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
  change.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,10000);