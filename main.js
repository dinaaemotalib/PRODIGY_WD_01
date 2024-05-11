let img = document.querySelector(".img"); // select from img class
let container = document.querySelector(".container"); // for background
function phones(phone) { // function to change the photos
    img.src = phone;
}
function colors(color) { // change the background color by clicking on the photo
    container.style.background = color;


}