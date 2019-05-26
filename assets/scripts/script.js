//jQuery
$(document).ready(function() {



  let blueBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  let redBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  let yellowBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  let greenBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  //======================//
  let order = [];
  let playerOrder = [];
  let flash;
  let turn;
  let good;
  let compTurn;
  let intervalId;
  let strict = false;
  let noise = true;
  let on = false;
  let win;
  //======================//
  // VARIABLES - DOM QUERIES

  const btnBlue = "#btnBlue";
  const btnGreen = "#btnGreen";
  const btnRed = "#btnRed";
  const btnYellow = "#btnYellow";

  const turnCounter = "#turn";
  const startButton = "#startButton";
  const gameButton = ".gameButton"; //button start (not used)
  const strictButton = "#strict";
  const turnOnButton = "#on";
  //const effects = buttonEffects();//zombie code//objects from buttonEffect() function

  strictButton.addEventListener('click', function(event) {
    if (strictButton.checked == true) {
      strict = true;
    }
    else {
      strict = false;
    }
  });

  turnOnButton.addEventListener('click', function(event) {
    if (turnOnButton.checked == true) {
      on = true;
      turnCounter.innerHTML = "-";
    }
    else {
      on = false;
      turnCounter.innerHTML = "";
      clearColor();
      clearInterval(intervalId);
    }
  });

  startButton.addEventListener('click', function(event) {
    if (on || win) {
      play(); //change the name of this function..
    }
  });

  function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
      order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
  }

  function gameTurn() {

    on = false;
    if (flash == turn) {
      clearInterval(intervalId);
      compTurn = false;
      clearColor();
      on = true;
    }
   if (compTurn){
     clearColor();
     setTimeout(function(){
       if (order[flash] == 1) one();
       if (order[flash] == 2) two();
       if (order[flash] == 3) three();
       if (order[flash] == 4) four();
     })
   }
  }
});
// make a button effect function using those variables;[]
// use the button effect variable to start the game;[]
// make the button change its color randomly;[]
