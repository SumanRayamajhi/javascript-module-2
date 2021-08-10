/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {

    let content = document.querySelector("#content");

    arrayOfPeople.forEach(person => {
      content.appendChild(document.createElement("h1")).textContent = person["name"];
      content.appendChild(document.createElement("h2")).textContent = person["job"];
    })
 }

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let ulEl = document.createElement("ul");
      content.appendChild(ulEl);
  shopping.forEach(item => {
       ulEl.appendChild(document.createElement("li")).textContent = item;
     })
}



//    I'd like to display my three favorite books inside a nice webpage!

/*
    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  let content = document.querySelector("#content");
  let ulEl1 = document.createElement("ul");
    content.appendChild(ulEl1);  
  
  books.forEach((book, index) => {
    
    let liEl1 = document.createElement("li");
    ulEl1.appendChild(liEl1);
    liEl1.appendChild(document.createElement("p")).textContent = book.title + " - " + book.author;

    
    let imgEl = document.createElement("img");
    imgEl.src = "./img" + (index + 1) + ".jpg";
    liEl1.appendChild(imgEl);
    if(book.alreadyRead === true) {
      liEl1.className += "bookRead"
    } else {
      liEl1.className += "bookUnRead"
    }
  })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", 
    job: "Teacher" },
  { name: "Joanna", 
    job: "Student" },
  { name: "Boris", 
    job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
