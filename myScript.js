// Pricing FAQ
let arrow1 = document.getElementById("arrow_icon1");
let btn1 = document.getElementById("btn1");
let btnTxt1 = document.getElementById("btn_text1");

function changeColor1 () {
    btnTxt1.classList.toggle('changeColor');
}

function rotateArrow1 () {
    arrow1.classList.toggle('rotate');
    changeColor1();
}

btn1.onclick = rotateArrow1;

let arrow2 = document.getElementById("arrow_icon2");
let btn2 = document.getElementById("btn2");
let btnTxt2 = document.getElementById("btn_text2");

function changeColor2 () {
    btnTxt2.classList.toggle('changeColor');
}

function rotateArrow2 () {
    arrow2.classList.toggle('rotate');
    changeColor2();
}

btn2.onclick = rotateArrow2;


let arrow3 = document.getElementById("arrow_icon3");
let btn3 = document.getElementById("btn3");
let btnTxt3 = document.getElementById("btn_text3");
function changeColor3 () {
    btnTxt3.classList.toggle('changeColor');
}

function rotateArrow3 () {
    arrow3.classList.toggle('rotate');
    changeColor3();
}

btn3.onclick = rotateArrow3;


let arrow4 = document.getElementById("arrow_icon4");
let btn4 = document.getElementById("btn4");
let btnTxt4 = document.getElementById("btn_text4");
function changeColor4 () {
    btnTxt4.classList.toggle('changeColor');
}

function rotateArrow4 () {
    arrow4.classList.toggle('rotate');
    changeColor4();
}

btn4.onclick = rotateArrow4;


let arrow5 = document.getElementById("arrow_icon5");
let btn5 = document.getElementById("btn5");
let btnTxt5 = document.getElementById("btn_text5");
function changeColor5 () {
    btnTxt5.classList.toggle('changeColor');
}

function rotateArrow5 () {
    arrow5.classList.toggle('rotate');
    changeColor5();
}

btn5.onclick = rotateArrow5;


// Portfolio Hide/Show images
// Show all images
function allBtn() {
    let plant = document.getElementsByClassName("plant");
    let glass = document.getElementsByClassName("glass");
    let light = document.getElementsByClassName("light");

    for (let i = 0; i < plant.length; i++) {
        plant[i].style.visibility = "";
    }

    for (let i = 0; i < glass.length; i++) {
        glass[i].style.visibility = "";
    }

    for (let i = 0; i < light.length; i++) {
        light[i].style.visibility = "";
    }
}

// Show plant images
function plantBtn() {
    let plant = document.getElementsByClassName("plant");
    let glass = document.getElementsByClassName("glass");
    let light = document.getElementsByClassName("light");

    for (let i = 0; i < plant.length; i++) {
        plant[i].style.visibility = "";
        glass[i].style.visibility = "hidden";
        light[i].style.visibility = "hidden";
    }
}

// Show glass images
function glassBtn() {
    let plant = document.getElementsByClassName("plant");
    let glass = document.getElementsByClassName("glass");
    let light = document.getElementsByClassName("light");

    for (let i = 0; i < glass.length; i++) {
        glass[i].style.visibility = "";
        plant[i].style.visibility = "hidden";
        light[i].style.visibility = "hidden";
    }
}

// Show light images
function lightBtn() {
    let plant = document.getElementsByClassName("plant");
    let glass = document.getElementsByClassName("glass");
    let light = document.getElementsByClassName("light");

    for (let i = 0; i < light.length; i++) {
        light[i].style.visibility = "";
        plant[i].style.visibility = "hidden";
        glass[i].style.visibility = "hidden";
    }
}