
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
}

function btnYellow() {
  document.getElementById("yellow").style.backgroundColor = "white";
}*/

function buttonEffect(value) {
  if (sound) {
    switch (value) {
      case 1:
        blueBtnAudio.play();
        btnBlue.style.backgroundColor = "#66AFF8"; //Soft blue   
        break;
      case 2:
        greenBtnAudio.play();
        btnGreen.style.backgroundColor = "#29FF9E"; //  Brighter green    
        break;
      case 3:
        redBtnAudio.play();
        btnRed.style.backgroundColor = "#E07070"; // Soft red
        break;
      case 4:
        yellowBtnAudio.play();
        btnYellow.style.backgroundColor = "#FAD362"; // Soft orange
        break;
      default:
        return false;
    }
  }
  sound = true;
}

