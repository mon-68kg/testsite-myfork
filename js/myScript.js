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
    // Buttons
    let all_btn_bg = document.getElementsByClassName("all_btn_bg")
    let plant_btn_bg = document.getElementsByClassName("plant_btn_bg")
    let glass_btn_bg = document.getElementsByClassName("glass_btn_bg")
    let light_btn_bg = document.getElementsByClassName("light_btn_bg")

    // add/remove button bg
    all_btn_bg[0].classList.add("bg-success", "text-white");
    plant_btn_bg[0].classList.remove("bg-success", "text-white");
    glass_btn_bg[0].classList.remove("bg-success", "text-white");
    light_btn_bg[0].classList.remove("bg-success", "text-white");

    // hide/show
    for (let i = 0; i < plant.length; i++) {
        plant[i].classList.remove("d-none");
    }
    for (let i = 0; i < glass.length; i++) {
        glass[i].classList.remove("d-none");
    }
    for (let i = 0; i < light.length; i++) {
        light[i].classList.remove("d-none");
    }
}

// Show plant images
function plantBtn() {
    let plant = document.getElementsByClassName("plant");
    let glass = document.getElementsByClassName("glass");
    let light = document.getElementsByClassName("light");
    // Buttons
    let all_btn_bg = document.getElementsByClassName("all_btn_bg")
    let plant_btn_bg = document.getElementsByClassName("plant_btn_bg")
    let glass_btn_bg = document.getElementsByClassName("glass_btn_bg")
    let light_btn_bg = document.getElementsByClassName("light_btn_bg")

    // add/remove button bg
    all_btn_bg[0].classList.remove("bg-success", "text-white");
    plant_btn_bg[0].classList.add("bg-success", "text-white");
    glass_btn_bg[0].classList.remove("bg-success", "text-white");
    light_btn_bg[0].classList.remove("bg-success", "text-white");

    // hide/show
    for (let i = 0; i < plant.length; i++) {
        plant[i].classList.remove("d-none");
        glass[i].classList.add("d-none");
        light[i].classList.add("d-none");
    }
}

// Show glass images
function glassBtn() {
    let plant = document.getElementsByClassName("plant");
    let glass = document.getElementsByClassName("glass");
    let light = document.getElementsByClassName("light");
    // Buttons
    let all_btn_bg = document.getElementsByClassName("all_btn_bg")
    let plant_btn_bg = document.getElementsByClassName("plant_btn_bg")
    let glass_btn_bg = document.getElementsByClassName("glass_btn_bg")
    let light_btn_bg = document.getElementsByClassName("light_btn_bg")

    // add/remove button bg
    all_btn_bg[0].classList.remove("bg-success", "text-white");
    plant_btn_bg[0].classList.remove("bg-success", "text-white");
    glass_btn_bg[0].classList.add("bg-success", "text-white");
    light_btn_bg[0].classList.remove("bg-success", "text-white");

    // hide/show
    for (let i = 0; i < glass.length; i++) {
        glass[i].classList.remove("d-none");
        plant[i].classList.add("d-none");
        light[i].classList.add("d-none");
    }
}

// Show light images
function lightBtn() {
    let plant = document.getElementsByClassName("plant");
    let glass = document.getElementsByClassName("glass");
    let light = document.getElementsByClassName("light");
    // Buttons
    let all_btn_bg = document.getElementsByClassName("all_btn_bg")
    let plant_btn_bg = document.getElementsByClassName("plant_btn_bg")
    let glass_btn_bg = document.getElementsByClassName("glass_btn_bg")
    let light_btn_bg = document.getElementsByClassName("light_btn_bg")

    // add/remove button bg
    all_btn_bg[0].classList.remove("bg-success", "text-white");
    plant_btn_bg[0].classList.remove("bg-success", "text-white");
    glass_btn_bg[0].classList.remove("bg-success", "text-white");
    light_btn_bg[0].classList.add("bg-success", "text-white");

    // hide/show
    for (let i = 0; i < light.length; i++) {
        light[i].classList.remove("d-none");
        plant[i].classList.add("d-none");
        glass[i].classList.add("d-none");
    }
}


// Blog page pagination
function pageF1() {
    let page1 = document.querySelector('.page_1');
    let page2 = document.querySelector('.page_2');
    let page3 = document.querySelector('.page_3');

    page1.classList.add('bg-success', 'text-white');
    page1.classList.remove('text-dark');
    page2.classList.remove('bg-success', 'text-white');
    page2.classList.add('text-dark');
    page3.classList.remove('bg-success', 'text-white')
    page3.classList.add('text-dark');
}

function pageF2() {
    let page1 = document.querySelector('.page_1');
    let page2 = document.querySelector('.page_2');
    let page3 = document.querySelector('.page_3');

    page1.classList.remove('bg-success', 'text-white');
    page1.classList.add('text-dark');
    page2.classList.add('bg-success', 'text-white');
    page2.classList.remove('text-dark');
    page3.classList.remove('bg-success', 'text-white')
    page3.classList.add('text-dark');
}

function pageF3() {
    let page1 = document.querySelector('.page_1');
    let page2 = document.querySelector('.page_2');
    let page3 = document.querySelector('.page_3');

    page1.classList.remove('bg-success', 'text-white');
    page1.classList.add('text-dark');
    page2.classList.remove('bg-success', 'text-white');
    page2.classList.add('text-dark');
    page3.classList.add('bg-success', 'text-white')
    page3.classList.remove('text-dark');
}