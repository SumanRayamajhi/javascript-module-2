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

const emailArea = document.querySelector("#exampleInputEmail1");
const nameArea = document.querySelector("#example-text-input");
const testArea = document.querySelector("#xampleTextarea");
const formControl = document.querySelector(".form-control");

const submit = document.querySelector("form .btn-primary");

submit.addEventListener("click", () => {
    if(formControl.length < 0) {
        return formControl.style.backgroundColor = "red";
    }
})