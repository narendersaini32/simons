let sound = true;
let blueBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let redBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let yellowBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let greenBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

// VARIABLES - DOM QUERIES

const btnBlue = document.querySelectorAll("#btnBlue");
const btnGreen = document.querySelectorAll("#btnGreen");
const btnRed = document.querySelectorAll("#btnRed");
const btnYellow = document.querySelectorAll("#btnYellow");


$(document).ready(function() {

  $("#btnBlue").click(function() {
    $(this).css('background-color', '#00FFFF');
    blueBtnAudio.play();
    if (this == '#00FFFF') {
      document.getElementById('btnBlue').style.color = "blue";
    }
  });

  $("#btnGreen").click(function() {
    $(this).css('background-color', '#7FFF00');
    greenBtnAudio.play();
  });

  $("#btnRed").click(function() {
    $(this).css('background-color', '#F08080');
    redBtnAudio.play();
  });

  $("#btnYellow").click(function() {
    $(this).css('background-color', '#F0E68C');
    yellowBtnAudio.play();
  });

});
// you will have to create more four functions like the above..
