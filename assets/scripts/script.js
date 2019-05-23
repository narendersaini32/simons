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
  const gameButton = ".gameButton"; //button start
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
 let enabled = true;
 let times = 0;
  //makes button effects play itself randomly 
  function clickByItself() {
    let random = Math.floor(Math.random() * arr.length);
    $(arr[random]).click();
    if (++times < 10) {
      setTimeout(function() { clickByItself(times); }, 1000);
    }
    else if (enabled == true){
      $(startButton).on('click', clickByItself);
    }else(enabled == false)
    {
      $(startButton).off('click', clickByItself);
    }
  }
  clickByItself();


    


  
  

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

//========================Tutor code==============================//
// I do not understand for while
//will click on buttons randomly
  /*function clickByItself() {
    let random = Math.floor(Math.random() * arr.length)
    var i;
    for (i = 0; i < 10; i++) {
     setTimeout($(arr[random]).click(), 1000);
   }
  }*/

/*var buttons = {‘ yellow’: btnYellow, ‘green’: btnGreen };
var buttonsColors = { 'yellow': 'darkyellow', 'green': 'darkgreen' };
var buttonsAudio = { 'yellow': yellowBtnAudio, 'green': greenBtnAudio };


var playButton = function(buttonName) {
  var selectedButton = buttons[buttonName];
  var selectedButtonColor = buttonsColors[buttonName];
  var selectedButtonAudio = buttonsAudio[buttonName];
  var originalColor = $(selectedButton).css('background-color');
  selectedButtonAudio.play();
  $(selectedButton).css('background-color', selectedButtonColor);
  setTimeout(function() {
    $(selectedButton).css('background-color', originalColor)
  }, 100);
};*/
