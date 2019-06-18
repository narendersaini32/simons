//Style only.


var change = document.getElementById("meBaby"); // add to the top


//This function get eight different linear gradients in an array and display its as index randomly.
function getRandomColor() {
    var letters = ['linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
        'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
        'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
        'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
        'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
        'linear-gradient(to top, #00c6fb 0%, #005bea 100',
        'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'
    ];
    var color = letters[Math.floor(Math.random() * letters.length)];
    return color;

}

// Using the getRandomColor index its change the background colors.
function changeColor() {
    change.style.background = getRandomColor();
}

//sets the interval time between each color.
setInterval(changeColor, 20000);
