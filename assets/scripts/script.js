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
  
  //objects from buttonEffect() function

  var effects = buttonEffects();
  var blueButtonEffect2 = effects.item1;
  var redButtonEffect2 = effects.item2;
  var greenButtonEffect2 = effects.item3;
  var yellowButtonEffect2 = effects.item4;


  //button effects 
  function buttonEffects() {
    //button blue effect
    var blueButtonEffect = $(btnBlue).click(function() {
      var originalColor = $(this).css('background-color');
      blueBtnAudio.play();
      $(this).css('background-color', '#00FFFF');
      setTimeout(function() {
        $(btnBlue).css('background-color', originalColor);
      }, 100);
    });
    //button green effect
    var greenButtonEffect = $(btnGreen).click(function() {
      var originalColor = $(this).css('background-color');
      greenBtnAudio.play();
      $(this).css('background-color', '#7FFF00');
      setTimeout(function() {
        $(btnGreen).css('background-color', originalColor);
      }, 100)
    });
    // button red effect
    var redButtonEffect = $(btnRed).click(function() {
      var originalColor = $(this).css('background-color');
      redBtnAudio.play();
      $(this).css('background-color', '#F08080');
      setTimeout(function() {
        $(btnRed).css('background-color', originalColor)
      }, 100);
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
    return  {
      item1: blueButtonEffect,
      item2: redButtonEffect,
      item3: greenButtonEffect,
      item4: yellowButtonEffect
    };
  }
  
  // start the game
  function startGame() { // it has a bug if clicked twice!
    $(startButton).on('click', buttonEffects);
  };
  startGame();
  
  console.log(buttonEffects());
  
  function changeColor() {
    //bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random() * randomColors.length)

  }

});
