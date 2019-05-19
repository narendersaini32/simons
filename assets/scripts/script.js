
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

  $(btnBlue).click(function() {
    $(this).css('background-color', '#00FFFF');
    blueBtnAudio.play();
    var changeBtnBlue = $(this).css('background-color', '#00FFFF');
    if(btnBlue == '#00FFFF' ){
      $(this).css('background-color', 'blue'), '200';
    }
  });
  
  
      console.log(changeBtnBlue);


  $(btnGreen).click(function() {
    $(this).css('background-color', '#7FFF00');
    greenBtnAudio.play();
  });

  $(btnRed).click(function() {
    $(this).css('background-color', '#F08080');
    redBtnAudio.play();
  });

  $(btnYellow).click(function() {
    $(this).css('background-color', '#F0E68C');
    yellowBtnAudio.play();
  });

});
// you will have to create more four functions like the above..
