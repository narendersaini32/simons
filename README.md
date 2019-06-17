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

### Initiation

## UI / UX

### Layout

- 
-
-

### Mobile Display

- Put your comment about this device here

### Tablet Display

- Put your comment about this device here

### Additional Note

#### Color scheme

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