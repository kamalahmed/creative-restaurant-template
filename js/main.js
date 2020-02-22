const slides = document.querySelectorAll("#image-slider > img");
const textSlides = document.querySelectorAll("#text-slider > div");
const nextLink = document.getElementById("next");
const prevLink = document.getElementById("prev");
let index = 0; // image slides index
let tIndex = 0; // text slides index

// For image sliders, update proper index
function nextSlide(slides) {
  removeActiveClass(slides, index); // remove active class from the first image/slide
  index = getNextIndex(slides, index); // determine next index using modulus operator eg. 1 % 3 = 1, 2%3 =2, 3%3 = 0;
  addActiveClass(slides, index); // add active class to the next slide
}

function prevSlide(slides) {
  removeActiveClass(slides, index); // remove active class from the first image/slide
  index = getPrevIndex(slides, index); // determine next index using modulus operator eg. 1 % 3 = 1, 2%3 =2, 3%3 = 0;
  addActiveClass(slides, index); // add active class to the next slide
}

// for text slider, update proper index
function nextTextSlide(slides) {
  removeActiveClass(slides, tIndex);
  tIndex = getNextIndex(slides, tIndex);
  addActiveClass(slides, tIndex);
}

function prevTextSlide(slides) {
  removeActiveClass(slides, tIndex);
  tIndex = getPrevIndex(slides, tIndex);
  addActiveClass(slides, tIndex);
}

// helpers
function addActiveClass(slides, i) {
  slides[i].classList.add("active");
}
function removeActiveClass(slides, i) {
  slides[i].classList.remove("active");
}

function getNextIndex(slides, index) {
  return (index + 1) % slides.length;
}

function getPrevIndex(slides, index) {
  return (index - 1 + slides.length) % slides.length;
}

// attach the triggers
nextLink.addEventListener("click", function(el, event) {
  nextSlide(slides);
  nextTextSlide(textSlides);
});
prevLink.addEventListener("click", function(el, event) {
  prevSlide(slides);
  prevTextSlide(textSlides);
});
