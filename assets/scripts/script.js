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

/*function btnBlue() {
  document.getElementById("blue").style.backgroundColor = "white";
}

function btnGreen() {
  document.getElementById("green").style.backgroundColor = "white";
}

function btnRed() {
  document.getElementById("red").style.backgroundColor = "white";
}*/

$('#btnGreen').on('click',function(){
    $(this).toggleClass('.2ndBtnGreen');
});
