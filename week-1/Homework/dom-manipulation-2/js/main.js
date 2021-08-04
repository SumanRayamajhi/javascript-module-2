// Task 1

const blueBtn = document.querySelector("#blueBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateBikeBtn = document.querySelector(".buttons .btn-primary");
const volunteerBtn = document.querySelector(".buttons .btn-secondary");

//Blue Button
blueBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "#000";
    volunteerBtn.style.color = "#fff";
});

//Orange Button
const orangeBtn = document.querySelector("#orangeBtn");

orangeBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "#fff";
});

//Green Button
const greenBtn = document.querySelector("#greenBtn");

greenBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBikeBtn.style.backgroundColor = "#000";
    volunteerBtn.style.backgroundColor = "#8c9c08";
})

//Task 2

let form = document.querySelector("form");
form.addEventListener("submit", checkUserInput);

let emailArea = document.querySelector("#exampleInputEmail1");
let nameArea = document.querySelector("#example-text-input");
let textArea = document.querySelector("#exampleTextarea");

emailArea.addEventListener("change", changeBackground);
nameArea.addEventListener("change", changeBackground);
textArea.addEventListener("change", changeBackground);

function changeBackground(event) {
    event.target.classList.remove("redBackground");
    event.target.classList.add("whiteBackground");
}

function checkUserInput(event) {
    event.preventDefault();
    let isEmailAreaValid = emailArea.value.trim().includes("@");
    let isNameAreaValid = nameArea.value.trim().length > 0;
    let isTextAreaValid = textArea.value.trim().length > 0;

    if (isEmailAreaValid && isNameAreaValid && isTextAreaValid) {

        emailArea.value = "";
        nameArea.value = "";
        textArea.value = "";

        emailArea.classList.remove("redBackground");
        emailArea.classList.add("whiteBackground");
        nameArea.classList.remove("redBackground");
        nameArea.classList.add("whiteBackground");
        textArea.classList.remove("redBackground");
        textArea.classList.add("whiteBackground");

        alert("Thank you for filling out the form");
    } else {

        if (!isEmailAreaValid) {
            emailArea.classList.remove("whiteBackground");
            emailArea.classList.add("redBackground");
        }
        if (!isNameAreaValid) {
            nameArea.classList.remove("whiteBackground");
            nameArea.classList.add("redBackground");
        }
        if (!isTextAreaValid) {
            textArea.classList.remove("whiteBackground");
            textArea.classList.add("redBackground");
        }
    }
}

// let submitButton = document.querySelector("form button");
//     submitButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         let emailArea = document.querySelector("#exampleInputEmail1");
//             let nameArea = document.querySelector("#example-text-input");
//         let textArea = document.querySelector("#exampleTextarea");
//         let isEmailAreaValid = emailArea.value.trim().includes("@");
//         let isNameAreaValid = nameArea.value.trim().length > 0;
//         let isTextAreaValid = textArea.value.trim().length > 0;
//         if(isEmailAreaValid && isNameAreaValid && isTextAreaValid) {
//             emailArea.style.backgroundColor = "transparent";
//             nameArea.style.backgroundColor = "transparent";
//             textArea.style.backgroundColor = "transparent";
//             emailArea.value = "";  
//             nameArea.value = ""; 
//             textArea.value = "";
//             alert("Thank you for filling out the form");
//         } else {
//             emailArea.style.backgroundColor = "red";
//             nameArea.style.backgroundColor = "red";
//             textArea.style.backgroundColor = "red";
//         }
//     })