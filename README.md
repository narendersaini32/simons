# Simons Memory Game

## Table of contents
<!--ts-->

1. [About](#about)
   1. [Goal](#Goal)
   2. [Functionality](#Functionality)
   3. [Settings](#Settings)
   4. [Four playable buttons](#Four-playable-buttons)
   5. [Initiation](#Initiation)
2. [UX](#UX)
   1. [Layout](#Layout)
   2. [Mobile Display](#Mobile-Display)
   3. [Tablet Display](#Tablet-Display)
   4. [Additional Note](#Additional-Note)
   5. [Color scheme](#Color-scheme)
   6. [Audio Content](#Audio-Content)
3. [Technologies](#Technologies)
4. [Testing](#Testing)
   1. [How the website was tested?](#How-the-website-was-tested)
   2. [Unfixed bugs](#Unfixed-bugs)
5. [Deployment](#Deployment)
   1. [Steps I used to deploy](#Steps-I-used-to-deploy)
6. [Credits](#Credits)
 <!--te-->

## About 

Project Milestone Two - Code Institute

[Simon Game](https://en.wikipedia.org/wiki/Simon_(game)) is a  memory game inspired by a classic eletronic game made by Ralph H.
Composed with four playable buttons with different colors (red, green, blue and yellow), players have to follow a set of different
ramdom crescent flash sequence to win. 

### Goal

The main goal of this project is to reproduce the same logic, layout and patterns of the Simon Game using HTM, CSS and JavaScript.
With the main purpose to be suitable to be played on the internet.

### Functionality 
The game layout is composed by two different sections - settings and the four playable buttons. 
Where the settings are composed by **Score Counter**, **Strict checkbox** and **Power Checkbox**. 
The four playable buttons are composed by four colors **red**, **blue**, **yellow** and **green** 
in which displays a brighter color in conjunction with a sound.

#### Settings

The functionality of the three elements of settings are correlated each other as well as with the four playable buttons.
For instance, all of them are initiated being called into the code by its `id` using a query selector. 

 **Start Button** 
```
const startButton = document.querySelector("#startButton");
```
and add its ```const``` into a event listener: 
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
For instance, if a players is on the level 7 in the game and miss a sequence button, he or she can repeat the 
same level if the strict checkbox is unchecked.However, with the strict checkbox activated, if the player miss
a sequence the same will not be able to play on the same level again having to continue the game from level-1 again.

The strict checkbox is called into the code by its `id` and added into an event listener:

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
The only time the ```strictButton```and event-listener were added in the code was inserting it into the 
```check()``` function to provide its fucntionality in the application.

#### Four playable buttons

The four playable buttons of the Simon game are the places in which all the game logic is joined together. 
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
for instance, is the set of colors for each button in wich will display each button with its initial color after the power checkbox is clicked.

The other four function ```play()```, ```gameTurn()```, ```check()``` and ```win()``` are the main batchs that will manage all 
of the event listeners, small button functions, loops as well as whether you lose or win. 

### Initiation

To play the game, players need to 1st press the ```Power``` checkbox on the top-right hand side, after press the ```start``` button. 
Then, as soon as they are pressed the loop will begin on the four button and the ```Score`` will initiate counting. 

## UX
### Layout

The Simon game is a game that doesn't need more than a page, so I chose to only display the game as a single page application (SPA).
Therefore, as I aimed kids rather than adults, the game is much more colorful if compared with the majority of the Simon's 
projects that are normally made. Also, the aplication is displayed with a carosel (only on desktops and Ipad Pro) in the first section, 
with its normal game on the second section. I displayed a color scheme on the background of the game section that 
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

### Color scheme

As mentioned before, this project Simons game has two different sections on desktop, 
and only one on smart phones as well as in the majority of ipads. Therefore, follows 
the color scheme for all sections, fonts and elements of the game:

1. Background colors:
   1. Carosel (first section):
      1. `#5270ff` Royal Blue, top sphere.
      2. `#4da408` Olivedrab, left sphere.
      3. `#e75454` Indianred, right sphere.
      4. `#fcfe00` Yellow, bottom sphere.
      5. `#79fb17` Lawgreen, first background.
      6. `#7cfbe3` Aquamarine, second background.
      7. `#e64242` Tomato, third background.
      8. `#f8e961` Khari, fourth background.
   2. Game (second section):
      1. letters[0] = `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`
      2. letters[1] = `linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)`
      3. letters[2] = `linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)`
      4. letters[3] = `linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)`
      5. letters[4] = `linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)`
      6. letters[5] = `linear-gradient(to top, #0ba360 0%, #3cba92 100%)`
      7. letters[6] = `linear-gradient(to top, #00c6fb 0%, #005bea 100`
      8. letters[7] = `linear-gradient(15deg, #13547a 0%, #80d0c7 100%)`

2. Font colors:
   1. Carosel:
      1. `#303030` darkslatergray.
      2. ```font-family: 'Luckiest Guy', cursive;``` for the heading.
      3. ```font-family: 'VT323', monospace;``` for the paragraph.
   2. The game:
      1. `#21252a` darkslatergray (same name, different code).
      2. `#ffffff` White button start.
      3. ```font-family: 'Press Start 2P', cursive;```
      4. Both have the same font style, but with a different size.

3. Four buttons colors:
   1. Off state:
       1. `blue`
       2. `green`.
       3. `red`.
       4. `#FF9914` Dark tangerine.
   2. On state:
       1. `darkblue`
       2. `darkgreen`
       3. `darkred`
       4. `goldenrod`

   4. On flash:
      1. `lightblue`.
      2. `lightgreen`.
      3. `tomato`.
      4. `yellow`.

### Audio Content

There are four different audios used in the game in wich are used 
when each of the four buttons is triggered whether by the CPU or players.
Therefore, each of the buttons are assigned to a variable then used in different 
functions to give its own functionality.

```
let blueBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');//audio for button blue
let redBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');//audio for button red 
let yellowBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');//audio for button yellow
let greenBtnAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');//audio for button green
```

## Technologies 

- The technologies used to develop this application are

- [HTML](https://www.w3.org/TR/html5/)
   - HTML is the World Wide Web’s core markup language. Used to structurate a website.
  
- [CSS](https://www.w3.org/Style/CSS/)
  - Cascading Style Sheets (CSS) is a simple mechanism for adding style 
  - (e.g., fonts, colors, spacing) to Web documents.
  
- [Bootstrap](https://getbootstrap.com/)
  - Bootstrap is a free and open-source CSS framework directed at responsive,
    mobile-first front-end web development. It contains CSS- and JavaScript-baseddesign templates for 
    typography, forms, buttons, navigation and other interface components.

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  - Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.
    JavaScript enables interactive web pages and is an essential part of web applications.

- [Google fonts]()
  - Google Fonts is a collection of interactive 
    application programming interfaces that allow users to use web fonts on their website.

## Testing

The work was tested in many different real and virtual screens. 

- Phones:
  - Galaxy S5
   - Pixel 2
   - Pixel 2XL
   - iPhone 5/SE
   - iPhone 6/7/8
   - iPhone 6/7/8 Plus (virtual and real device)
   - iPhone X
- Tablets:
  - iPad
  - iPad Pro
- Desktops:
  - ThinkPad x1 Carbon
- Television
  - 4k Television (real device)

### How the website was tested?

I used the Chrome developer tool and Responsinator.com to test the website on different screens and my iPhone 6 to know whether the outcomes were working. I tried different websites to try different screens, however not having the real outcome.
I had some issues to fix such as @media queries with (max/min-device-width) that weren't allowing media queries to be accepted to these websites. Therefore, I changed these media queries from (max/min-device-width) to (max/min-width) and the changes I made worked well appearing all of the changes with no issues.

If you need to test the responsiveness of the website yourself you can use the same tools I used:

-  Chrome Developer Tools:
    1. Click on the website with the right button;
    2. Then click inspect;
    3. Once the Web-developer tools appear, click Ctrl+Shift+M to test the webpage on different screens.

-  Responsinator.com
    1. follow the link responsinator.com;
    2. copy the website link (URL) and paste within the field and click go.
    3. The webpage will be displayed in different screens already not needing to change as same as GCDT.

- Using different approaches and tools of testing.

  - HTML
    - [W3C html validator](https://validator.w3.org/)
  - CSS
    - [W3C css vaidator](https://jigsaw.w3.org/css-validator/)
  - JavaScript
    -[jshint](https://jshint.com/)

### Unfixed bugs

 The game has a small bug in which so far I could not figure out how to fix. 
 If you press any of the four buttons and the start button more than once they begin flashing randomly,
 outside of the game logic needing to reload the page.

## Deployment 

The deployment of this project was done using Cloud9 IDE as well as it working directory and
terminal.

### Steps I used to deploy

1. Create a workspace on Cloud9 environment.
2. Create all the files and folders needed for the project.
3. Link all the files to `index.html`.
4. Create a repo on github.
5. Link the github repo to the working directory.
   1. Commands:
      1. Initialize the local directory as a Git repository `git init`
      2. Add the files in my new local repository `git add .`
      3. Commit the files that I've staged in my local repository `git commit -m "First commit"`
      4. Sets the new remote `git remote add origin remote repository URL`
      2. Verifies the new remote URL `git remote -v`
      3. Pushes the changes in my local repository `git push origin master`

NOTE: Once the remote repo was already linked to my working directory, the routine I did to track the 
project groth are as follows:

- Local repository:
  - The deployment of the project was directly sent to the remote github repository.
  
  </br>
  <img src="assets/images/README images/flowchart.PNG" width="650">
  </br>

- Remote repository:
  - As I was using the Cloud9 ide I did not neet to ```git fetch``` or ```git clone```,
    even using other devices, I could log into my C9 account and continue working on my project.

## Credits

 This project had inspiration from:
 
1. [Wojciech Kałużny](https://codepen.io/mrkaluzny/full/pbVxxd/).
2. [Danpurdy](https://www.danpurdy.co.uk/tutorial/simon-says-game-in-jquery-tutorial/) to explain the game logics.
3. [W. Kałużny](https://medium.com/front-end-weekly/create-simon-game-in-javascript-d53b474a7416) For the UX.
4. [sanwebe](https://www.sanwebe.com/2014/02/css3-buttons-examples-with-effects-animations) For the start button.
5. [Samuel Thornton](https://codepen.io/sdthornton/pen/wBZdXq) For the box-shadow effects.

This project was created by [Elias Prado](https://github.com/EliasOPrado).


