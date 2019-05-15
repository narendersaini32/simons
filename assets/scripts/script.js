var game = {
  count: 0,
  possibilities: ['#green', '#blue', '#red', '#dark'],
  currentGame: [],
  player: [],
  sound: {
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    dark: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  },
  strict: false
}


function btnBlue() {
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
}


