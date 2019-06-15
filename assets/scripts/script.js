let blueBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let redBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let yellowBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let greenBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
//======================//
let organization = [];
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

const btnBlue = document.querySelector("#btnBlue");
const btnGreen = document.querySelector("#btnGreen");
const btnRed = document.querySelector("#btnRed");
const btnYellow = document.querySelector("#btnYellow");

const turnCounter = document.querySelector("#turn");
const startButton = document.querySelector("#startButton");
const gameButton = document.querySelector(".gameButton"); //button start (not used)
const strictButton = document.querySelector("#strict");
const turnOnButton = document.querySelector("#on");


//Setthings buttons
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
    
    play(); 
    
  }
});

function play() {
  win = false;
  organization = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    organization.push(Math.floor(Math.random() * 4) + 1);
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
  if (compTurn) {
    clearColor();
    setTimeout(function() {
      if (organization[flash] == 1) first();
      if (organization[flash] == 2) second();
      if (organization[flash] == 3) third();
      if (organization[flash] == 4) fourth();
      flash++;
    }, 200);
  }
}

function first() {
  if (noise) {
    greenBtnAudio.play();
  }
  noise = true;
  btnGreen.style.backgroundColor = "lightgreen";
}

function second() {
  if (noise) {
    redBtnAudio.play();
  }
  noise = true;
  btnRed.style.backgroundColor = "tomato";
}

function third() {
  if (noise) {
    yellowBtnAudio.play();
  }
  noise = true;
  btnYellow.style.backgroundColor = "yellow";
}

function fourth() {
  if (noise) {
    blueBtnAudio.play();
  }
  noise = true;
  btnBlue.style.backgroundColor = "lightskyblue";
}

function clearColor() {
  btnGreen.style.backgroundColor = "darkgreen";
  btnRed.style.backgroundColor = "darkred";
  btnYellow.style.backgroundColor = "goldenrod";
  btnBlue.style.backgroundColor = "darkblue";
}

function btnLightColor() {
  btnGreen.style.backgroundColor = "lightgreen";
  btnRed.style.backgroundColor = "tomato";
  btnYellow.style.backgroundColor = "yellow";
  btnBlue.style.backgroundColor = "lightskyblue";
}

btnGreen.addEventListener('click', function(event) {
  if (on) {
    playerOrder.push(1);
    check();
    first();
    if (!win) {
      setTimeout(function() {
        clearColor();
      }, 300);
    }
  }
})

btnRed.addEventListener('click', function(event) {
  if (on) {
    playerOrder.push(2);
    check();
    second();
    if (!win) {
      setTimeout(function() {
        clearColor();
      }, 300);
    }
  }
})

btnYellow.addEventListener('click', function(event) {
  if (on) {
    playerOrder.push(3);
    check();
    third();
    if (!win) {
      setTimeout(function() {
        clearColor();
      }, 300);
    }
  }
})

btnBlue.addEventListener('click', function(event) {
  if (on) {
    playerOrder.push(4);
    check();
    fourth();
    if (!win) {
      setTimeout(function() {
        clearColor();
      }, 300);
    }
  }
})

function check() {
  if (playerOrder[playerOrder.length - 1] !== organization[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 20 && good) {
    winGame();
  }

  if (good == false) {
    btnLightColor();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      }
      else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 100);
      }
    }, 100);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  btnLightColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}

// testing code

btnBlue.addEventListener("click", function avoidBug(){
  var playerTurn = 0;
  if (playerTurn > 2){
    btnBlue.disabled = true;
  }else{
    btnBlue.disabled = false;
  }
});

btnGreen.addEventListener("click", function avoidBug(){
  var playerTurn = 0;
  if (playerTurn > 2){
    btnBlue.disabled = true;
  }else{
    btnBlue.disabled = false;
  }
});

btnRed.addEventListener("click", function avoidBug(){
  var playerTurn = 0;
  if (playerTurn > 2){
    btnBlue.disabled = true;
  }else{
    btnBlue.disabled = false;
  }
});

btnYellow.addEventListener("dblclick", function avoidBug(){
  var playerTurn = 0;
  if (playerTurn > 2){
    btnBlue.disabled = true;
  }else{
    btnBlue.disabled = false;
  }
});

window.addEventListener("keyup", event => {
  let key = parseInt(event.keyCode);
  let keyArray = [
    [80, 1],
    [76, 2],
    [65, 3],
    [89, 4]
  ];
  console.log(key);
  for (let k in keyArray) {
    if (keyArray[k][0] == key) {
      addEventListener(keyArray[k][1]);
      break;
    }
  }
});


/*
fix button bug on click
fix iphone 5 media query
add game rules and how to win
*/