//jQuery
$(document).ready(function() {



  let blueBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  let redBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  let yellowBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  let greenBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

  // VARIABLES - DOM QUERIES

  const btnBlue = "#btnBlue";
  const btnGreen = "#btnGreen";
  const btnRed = "#btnRed";
  const btnYellow = "#btnYellow";
  const startButton = "#startButton";
  const gameButton = ".gameButton";//button start
  //const effects = buttonEffects();//zombie code//objects from buttonEffect() function

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
  
  //to be used on the buttonEffects()/clickByItself()
  var arr = [blueButtonEffect, redButtonEffect, greenButtonEffect, yellowButtonEffect];
  
 //will display the loop 
 function clickByItself(){
   let random = Math.floor(Math.random()*arr.length)
   $(arr[random]).click();
 }
 clickByItself();
  // start the game
  /*function startGame() { // it has a bug if clicked twice!
    $(startButton).on('click', buttonEffects);
  }
  startGame();*/


  /*  function changeColor() {
      let random = Math.floor(Math.random() *effects.length);
      gameButton.style.backgroundColor = effects[random];
      var i;
      for(i = 0; i < effects[random].length; i++){
        
      }
    }*/




});

// make a button effect function using those variables;[]
// use the button effect variable to start the game;[]
// make the button change its color randomly;[]
