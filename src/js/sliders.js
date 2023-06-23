
var index = 0;
var slides = document.getElementsByClassName("slider");
var slidesAuto = document.getElementsByClassName("sliderAutomatic");


//Si estem en una pàgina de festes
if (slides.length != 0) {
  slides[index].style.display = "block";
}
//Si estem en una pàgina de natura
if (slidesAuto.length != 0) {
  slidesAuto[index].style.display = "block";
  sliderAuto();
}

document.querySelector('#prev').addEventListener('click', prev);
document.querySelector('#next').addEventListener('click', next);

function sliderAuto() {
  slidesAuto[index].style.display = "none";
  index += 1;
  if (index > slidesAuto.length - 1) {
    index = 0;
  }
  slidesAuto[index].style.display = "block";
  setTimeout(sliderAuto, 5000);
}

function next() {
  slides[index].style.display = "none";
  index += 1;
  if (index > slides.length - 1) {
    index = 0;
  }
  slides[index].style.display = "block";
}
function prev() {
  slides[index].style.display = "none";
  index -= 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].style.display = "block";

}
