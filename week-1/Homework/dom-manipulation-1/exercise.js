/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 
    */
    const pEl = document.querySelectorAll("p");
    console.log(pEl);
    /*
    2. the first div element node
    --> should log the ".site-header" node
    */
    const siteHeader = document.querySelector(".site-header");
    console.log(siteHeader);
    /*
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
    */
    const jumbotronText = document.querySelector("#jumbotron-text");
    console.log(jumbotronText);
    /*
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
    */
    const pPrimaryContent = document.querySelector(".primary-content p");
    console.log(pPrimaryContent);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", () => {
    alert("Thanks for visiting Bikes for Refugees!");
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeBgColor = document.querySelector("#bgrChangeBtn");
changeBgColor.addEventListener("click", () => {
    document.body.style.backgroundColor = " #b3b3ff";
})

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addSomeText = document.querySelector("#addTextBtn");

addSomeText.addEventListener("click", () => {
   const newP = document.createElement("p");
   const text = document.createTextNode("Practicing to add more paragraph somewhere.");
   newP.appendChild(text);

   const learnMoreSection = document.querySelector(".articles");
   learnMoreSection.appendChild(newP)
})

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largeLinks = document.querySelector("#largerLinksBtn");

largeLinks.addEventListener("click", () => {
    const aEl = document.getElementsByTagName("a");
    for (let i = 0; i < aEl.length; i++) {
        aEl[i].style.fontSize = "1.1rem"
    }
    })


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/


//    const learnMoreSection = document.querySelector(".articles");
//    learnMoreSection.appendChild(newP)
// }
// var targetDiv = document.getElementsById("addArticleBtn").addEventListener("click", noParagraph);
// function newParagraph(){
//     var newTag = document.createElement("p");
//     var newText = document.createTextNode("This is a new paragraph");
//     console.log(newTag);
//     var inputAtFirst = document.getElementsById("mainArticles");
//     let result = inputAtFirst.insertBefore(newTag, inputAtFirst.childNodes[1]);
//     result.style.color = "red";

// }
const addBtn = document.getElementById("addArticleBtn");
addBtn.addEventListener('click', () => {
    const inputText = document.getElementsByClassName("addArticle");
    const newP = document.createElement("p");
    newP.textContent = inputText.value;
    const learnSection = document.querySelector("#mainArticles");
    learnSection.appendChild(newP)
    inputText.value = ""    
})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/


const colors = ["#b3ffff", "#b3b3ff", " #ff99c2", "#ddff99", "#ffff99"]; 
const backGroundColor = document.querySelector("body");
let i = 0;
changeBgColor.addEventListener('click', () => {
    if(i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
backGroundColor.style.backgroundColor = colors[i]
})


