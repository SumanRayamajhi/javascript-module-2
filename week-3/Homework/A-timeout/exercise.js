/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)
*/

// setTimeout(function() {
//     document.body.style.backgroundColor = "aqua";
// }, 5000);

/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)*/

const colors = ["red", "#b3b3ff", " #ff99c2", "#ddff99", "#ffff99"]; 
const backGroundColor = document.querySelector("body");
let i = 0;

function changeBgColor() {
    backGroundColor.style.backgroundColor = colors[i]
    if(i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
}
setInterval(changeBgColor, 5000);


