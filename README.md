# Simons Memory Game


## Table of contents

DO AFTER ALL PARTS BE DONE.

## About 

Project Milestone Two - Code Institute

[Simon Game](https://en.wikipedia.org/wiki/Simon_(game)) is a  memory game inspired by a classic eletronic game made by Ralph H.
Composed with four playable buttons with different colors (red, green, blue and yellow), players have to follow a set of different
flash ramdom crescent sequence in order to win. 

### Goal

The main goal of this project is to reproduce the same logic, layout and patterns the Simon Game has with Javascript.
Being suitable to be played on the internet.

### Functionality 
The game layout is composed by two different sections settings and the four playable buttons. 
Where the settings are composed by **Score Counter**, **Strict checkbox** and **Power Checkbox**. 
The four playable buttons are composed by four colors **red**, **blue**, **yellow** and **green** 
in which displays a brighter color in conjunction with a sound.

#### Settings

The functionality of the three elements of settings are correlated each other as well as with the four playable buttons.
For instance, all of them are initiated being called into the code by its id with a query selector. 

 **Start Button** 
```
const startButton = document.querySelector("#startButton");
```
and added its ```const``` into a event listener as a result: 
```
startButton.addEventListener('click', function(event) {
  if (on || win) {
    play(); 
  }
});
```
**Power Checkbox** and **Score** 

As mentioned before, the correlation in the settings section is between the power button ```turnOnButton``` 
and score ```turnCounter```.
```
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
```
As soon as the Power checkbox is clicked the Score element into the section initiates with a ```-``` 
in which begins to increase in number based on turns made by players success in the game.

**Strict Checkbox**

The strict checkbox is the element in which doesn't allow players repeat the same level again multiples times. 
For instance, if a players is on the level 7 in the game and miss a sequence button he can repeat the same level, 
however, with the strict checkbox activated the player will not be able to play on the same level again having 
to continue the game from level-1 again.

The strict checkbox is called into the code by its id and added into an event listener:

```
const strictButton = document.querySelector("#strict");
```
```
strictButton.addEventListener('click', function(event) {
  if (strictButton.checked == true) {
    strict = true;
  }
  else {
    strict = false;
  }
});
```
The only way the ```strictButton``` is added is into the ```check()``` function to provide its fucntionality.

#### Four playable buttons

The four playable buttons of the Simon game is the place in which all the game logic is joined together. 
All of the four button are displayed into the code by its ```id``` and displayed into a ```const``` within ```script.js```.
In addition, the four buttons are followed by its colors variances as well as its sounds as displayed below:

```
//const based by each button.
const btnBlue = document.querySelector("#btnBlue");//Button blue
const btnGreen = document.querySelector("#btnGreen");//Button green
const btnRed = document.querySelector("#btnRed");//Button red 
const btnYellow = document.querySelector("#btnYellow");//Button yellow
```
```
//variables for each color.
let blueBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');//audio for button blue
let redBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');//audio for button red 
let yellowBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');//audio for button yellow
let greenBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');//audio for button green
```
Moreover, with all the four buttons declared within the code, an event listener is made for each button to 
represent its effect into the game.
```
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
});
```
Using the ```btnGreen``` as a example you can see its functionality. Using conditionals the event describes 
the player order index to be used with the game loop as ```1```, with the ```check()``` fucntion that gives the player choice verification
as well as its own function called ```first()``` that all the other three buttons/colors have. The ```clearColor()``` function, 
for instance, is the set of colors for each button in wich will display each button with its initial color.

The other four function ```play()```, ```gameTurn()```, ```check()``` and ```win()``` are the main batchs that will manage all 
of the event listeners, small button functions, loops as well as whether you lose or win. 

### Initiation

To play the game, players need to 1st press the ```Power``` checkbox on the top-right hand side and after press the ```start``` button. 
as soon as they are pressed the loop will begin on the four button and the ```Score`` will initiate counting. 

## UX
### Layout

The Simon game is a game that doesn't need more than a page, so I chose to only display the game in only one page (SPA).
Therefore, as I aimed kids rather than adults, the game is much more colorful if compared with the majority of the Simon's 
projects that are normally made. Also, the aplication is displayed with a carosel (only on desktops and Ipad Pro) in the first section, 
with its normal game on the second section. In addition, I displayed a color scheme on the background of the game section that 
changes its color every 20 seconds, to keep the player engaged with the game.
### Mobile Display

> This images represent the UI of iphone on potrait and landscape mode. 

iPhone Potrait             |  iPhone Landscape
:-------------------------:|:-------------------------:
<img src="assets/images/README images/iphonePotrait.gif" width="200">  |  <img src="assets/images/README images/iphoneLandscape.gif" width="450">


### Tablet Display

> This images represent the UI of iphone on potrait and landscape mode.


iPad potrait            | iPad landscape
:-------------------------:|:-------------------------:
<img src="assets/images/README images/ipadPotrait.gif" width="250">  | <img src="assets/images/README images/ipadLandscape.gif" width="400">


### Additional Note

The different colors that appears on the backround of the game is a set of eight different linear gradients.
I used this set of colors within a function adapted from a very simple code I learned on YT.
The normal approach on that code was simply to change the bacground color, but in this current project
I changed to be more sofisticated adding linear gradient instead of simple colors. 

```
var change = document.getElementById("meBaby"); // add to the top

//This function/object get eight different linear gradients in an array and display its as index randomly.

function getRandomColor() {
    //object with multiples colors as linear-gradients
    var letters = [
         'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
        'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
        'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
        'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
        'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
        'linear-gradient(to top, #00c6fb 0%, #005bea 100',
        'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'
    ];
    //returns a random color from the letters object using their index.
    var color = letters[Math.floor(Math.random() * letters.length)];
    return color;
}

// Using the getRandomColor index its change the background colors.
function changeColor() {
    change.style.background = getRandomColor();
}

//sets the interval time between each color.
setInterval(changeColor, 20000);//set to 20 seconds<<
```
With this approach I could have a much better engaging game.

#### Color scheme

- Background colors:
  - Carosel:
   > ![#5270ff] Royal Blue, top sphere.
   > ![#4da408] Olivedrab, left sphere.
   > ![#e75454] Indianred, right sphere.
   > ![#fcfe00] Yellow, bottom sphere.
   > ![#79fb17] Lawgreen, first background.
   > ![#7cfbe3] Aquamarine, second background.
   > ![#e64242] Tomato, third background.
   > ![#f8e961] Khari, fourth background.

- Font colors:
- Carosel
   > ![#303030] darkslatergray.
   > ```font-family: 'Luckiest Guy', cursive;``` for the heading.
   > ```font-family: 'VT323', monospace;``` for the paragraph.
 - The game
   > ![#21252a] darkslatergray (same name, different code).
   > ![#ffffff] White button start.
   > ```font-family: 'Press Start 2P', cursive;```
   > Both have the same font style, but with a different size.

- Four buttons:

- Normal state:

-- On flash:


## Audio Content

## Technologies 

- 

## Testing

-

## Deployment 

## Credits













On this project I am training my knowledge with JS.

## References:

- This project had inspiration from [Wojciech Kałużny](https://codepen.io/mrkaluzny/full/pbVxxd/).
- https://www.danpurdy.co.uk/tutorial/simon-says-game-in-jquery-tutorial/
- https://medium.com/front-end-weekly/create-simon-game-in-javascript-d53b474a7416
- https://www.sanwebe.com/2014/02/css3-buttons-examples-with-effects-animations (for the "start" button).
- https://codepen.io/sdthornton/pen/wBZdXq Samuel Thornton (for the rover effect on buttons).

## Bringing Simons Game to another level.

- Landing-page like game to introduce it for those who don't know what the game is like.
- Three different sections 1st: Main, 2nd: parallax, 3rd: The game.

### Fonts:
-> Acme.
->Press+Start+2P.