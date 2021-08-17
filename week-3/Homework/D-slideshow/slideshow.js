// Write your code here
const images = [
    "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
    "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
    "https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc",
    "https://i.picsum.photos/id/1084/4579/3271.jpg?hmac=YblMazviSugJVfZsFPaFI_Vp6lBeQin62qpm8rxHruo",
    "https://i.picsum.photos/id/200/1920/1280.jpg?hmac=-eKjMC8-UrbLMpy1A4OWrK0feVPB3Ka5KNOGibQzpRU"
]

let imgIndex = 0;
let intervalRef;
let delayIntervalInMs = 1000;
let currentFnc;

const imgToSlide = document.createElement("div");
const buttonsEl = document.createElement("div");

const imgEl = document.createElement("img");
const backBtn = document.createElement("button");
backBtn.addEventListener("click", moveBackwards)
backBtn.textContent = "Back";

const autoBackBtn = document.createElement("button");
autoBackBtn.addEventListener("click", moveBackwardsAuto)
autoBackBtn.textContent = "Auto Back";

const nextBtn = document.createElement("button");
nextBtn.addEventListener("click", moveForwards)
nextBtn.textContent = "Forward"

const autoNextBtn = document.createElement("button");
autoNextBtn.addEventListener("click", moveForwardsAuto)
autoNextBtn.textContent = "Auto Forward"

const stopBtn = document.createElement("button");
stopBtn.textContent = "Stop"
stopBtn.addEventListener("click", stop);

const animationDelayEl = document.createElement("input");
animationDelayEl.placeholder = "Delay 1000ms by default";
animationDelayEl.addEventListener("change", updateDelayTime)


buttonsEl.appendChild(autoBackBtn);
buttonsEl.appendChild(backBtn);
buttonsEl.appendChild(stopBtn);
buttonsEl.appendChild(nextBtn);
buttonsEl.appendChild(autoNextBtn);
buttonsEl.appendChild(animationDelayEl);

imgToSlide.appendChild(imgEl)
imgToSlide.appendChild(buttonsEl)

document.body.appendChild(imgToSlide)

function showImage() {
    imgEl.src = images[imgIndex]
}
function moveBackwards() {
    imgIndex = (imgIndex == 0) ? images.length - 1 : imgIndex - 1
    showImage() 
}

function moveBackwardsAuto() {
    resetInverval(moveBackwards);
}

function moveForwards() {
    imgIndex = (imgIndex == images.length - 1) ? 0 : imgIndex + 1
    showImage() 
}

function moveForwardsAuto() {
    resetInverval(moveForwards);
}

function stop() {
    resetInverval();
}

function updateDelayTime(ev) {
    delayIntervalInMs = ev.target.value
    resetInverval(currentFnc);
}

function resetInverval(fnc) {
    if(intervalRef) clearInterval(intervalRef);
    if(typeof fnc === "function") {
        currentFnc = fnc
        intervalRef = setInterval(fnc, delayIntervalInMs)
    } 
}

 showImage()