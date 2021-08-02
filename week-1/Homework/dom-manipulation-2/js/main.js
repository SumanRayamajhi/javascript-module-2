const blueBtn = document.querySelector("#blueBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateBikeBtn = document.querySelector(".buttons .btn-primary");
const volunteerBtn = document.querySelector(".buttons .btn-secondary");

blueBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "#000";
    volunteerBtn.style.color = "#fff";
});

const orangeBtn = document.querySelector("#orangeBtn");

orangeBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "#fff";
});

const greenBtn = document.querySelector("#greenBtn");

greenBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBikeBtn.style.backgroundColor = "#000";
    volunteerBtn.style.backgroundColor = "#8c9c08";
})

let submitButton = document.querySelector("form button");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        let emailArea = document.querySelector("#exampleInputEmail1");
        let nameArea = document.querySelector("#example-text-input");
        let textArea = document.querySelector("#exampleTextarea");
    
        let isEmailAreaValid = emailArea.value.trim().includes("@");
        let isNameAreaValid = nameArea.value.trim().length > 0;
        let isTextAreaValid = textArea.value.trim().length > 0;
    
        if(isEmailAreaValid && isNameAreaValid && isTextAreaValid) {
            emailArea.style.backgroundColor = "transparent";
            nameArea.style.backgroundColor = "transparent";
            textArea.style.backgroundColor = "transparent";
            emailArea.value = "";  
            nameArea.value = ""; 
            textArea.value = "";
            alert("Thank you for filling out the form");
        } else {
            emailArea.style.backgroundColor = "red";
            nameArea.style.backgroundColor = "red";
            textArea.style.backgroundColor = "red";
        }
    })    
    

    //For the **Email** field, to check if it contains the `@` character and value length has to be greater than zero
  

    //For the **Your name** field, to check if value length has to be greater than zero
    
//     if(nameArea.value.trim().length > 0) {
//         nameArea.style.backgroundColor = "transparent";
//         
//     } else {
//         nameArea.style.backgroundColor = "red";
//     };

//     //For the **Your name** field, to check if value length has to be greater than zero
    
//     if(textArea.value.trim().length > 0) {
//         textArea.style.backgroundColor = "transparent";
//         
//     } else {
//         textArea.style.backgroundColor = "red";
//     };
  
// };
// function allFilled() {
//     if(isCheckUserInputValid) {
//         alert("Thank you for filling out the form");
// }



// let form = document.querySelector("form");
// form.addEventListener("submit", checkUserInput)
// let emailArea = document.querySelector("#exampleInputEmail1");
// let nameArea = document.querySelector("#example-text-input");
// let textArea = document.querySelector("#exampleTextarea");
// let inputs = document.querySelectorAll("input");
// let inputsArray = Array.from(inputs); 

// emailArea.addEventListener("change", changeBackground);
// nameArea.addEventListener("change", changeBackground);
// textArea.addEventListener("change", changeBackground);

// function changeBackground(event) {
//     event.target.classList.remove("redBackground");
//     event.target.classList.add("whiteBackground");
// }
// function checkUserInputs(event) {
//   event.preventDefault();
//   let isEmailAreaValid = emailArea.value.trim().includes("@");
//   let isNameAreaValid = nameArea.value.trim().length > 0;
//   let isTextAreaValid = textArea.value.trim().length > 0;
//   if(isEmailAreaValid && isNameAreaValid && isTextAreaValid) {
//       emailArea.value = "";
//       nameArea.value = "";
//       textArea.value = "";
//       emailArea.style.backgroundColor = "white";
//       nameArea.style.backgroundColor = "white";
//       textArea.style.backgroundColor = "white";
//       alert("Thank you for filling out the form");
//   } else {
//       if(!isEmailAreaValid) {
//           emailArea.classList.remove("whiteBackground");
//           emailArea.classList.add("redBackground");
//       }
//       if(!isNameAreaValid) {
//           nameArea.classList.remove("whiteBackground");
//           nameArea.classList.add("redBackground");
//       }
//       if(!isTextAreaValid) {
//           textArea.classList.remove("whiteBackground");
//           nameArea.classList.add("redBackground");
//       }

//   }
// }


