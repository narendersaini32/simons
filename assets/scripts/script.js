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



  //NEW APPROACH
  $(strictButton).on('click', (event) => {
    if (strictButton.checked == true) {
      strict = true;
    }
    else {
      strict = false;
    }
  });
  
  $(turnOnButton).on('click', function(event){
    if(turnOnButton.checked == true){
      on = true;
      turnCounter.innerHTML = "-";
    }else{
      on = false;
      turnCounter.innerHTML = "";
      clearColor();
      clearInterval(intervalId);
    }
  });






  //four variables representing its button effects 
  //button blue effect
  var blueButtonEffect = $(btnBlue).click(function() {
    var originalColor = $(this).css('background-color');
    blueBtnAudio.play();
    $(this).css('background-color', '#00FFFF');
    setTimeout(function() {
      $(btnBlue).css('background-color', originalColor);
    }, 1000);
  });
  //button green effect
  var greenButtonEffect = $(btnGreen).click(function() {
    var originalColor = $(this).css('background-color');
    greenBtnAudio.play();
    $(this).css('background-color', '#7FFF00');
    setTimeout(function() {
      $(btnGreen).css('background-color', originalColor);
    }, 1000);
  });
  // button red effect
  var redButtonEffect = $(btnRed).click(function() {
    var originalColor = $(this).css('background-color');
    redBtnAudio.play();
    $(this).css('background-color', '#F08080');
    setTimeout(function() {
      $(btnRed).css('background-color', originalColor)
    }, 1000);
  });
  // button yellow effect
  var yellowButtonEffect = $(btnYellow).click(function() {
    var originalColor = $(this).css('background-color');
    yellowBtnAudio.play();
    $(this).css('background-color', '#F0E68C');
    setTimeout(function() {
      $(btnYellow).css('background-color', originalColor)
    }, 100);
  });

  //to be used on the clickByItself() function
  var arr = [blueButtonEffect, redButtonEffect, greenButtonEffect, yellowButtonEffect];
  // fUNCTIONS WITH OLD APPROACH
  /*var times = 0;
  var enabled = 1; // Changed boolean to int easily updatable
  function clickByItself() {
    if (enabled == 1) {
      let random = Math.floor(Math.random() * arr.length);
      $(arr[random]).click();
      if (++times < 10) {
        setTimeout(function() { clickByItself(times); }, 1000);
      }
    }
  }
  //turn on/off if using the startButton
  function turnOnTurnOff() {
    if (enabled == 1) {
      clickByItself();
    }
  }
  //clicking the button will call the turnOnTurnOff() function
  $(startButton).click(function() {
    turnOnTurnOff();
  });*/




  // start the game
  /*function startGame() { // it has a bug if clicked twice!
    $(startButton).on('click', buttonEffects);
  }
  startGame();*/

  // Antonio 


});
// make a button effect function using those variables;[]
// use the button effect variable to start the game;[]
// make the button change its color randomly;[]
