const imageSlider = document.getElementById("image-slider");
const slides = imageSlider.getElementsByTagName('img');
const nextLink = document.getElementById("next");
const prevLink = document.getElementById("prev");
let index = 0;

function nextSlide() {
    removeActiveClass(index)// remove active class from the first image/slide
    index = getNextIndex(index); // determine next index using modulus operator eg. 1 % 3 = 1, 2%3 =2, 3%3 = 0;
    addActiveClass(index); // add active class to the next slide
}

function prevSlide() {
    removeActiveClass(index)// remove active class from the first image/slide
    index = getPrevIndex(index); // determine next index using modulus operator eg. 1 % 3 = 1, 2%3 =2, 3%3 = 0;
    addActiveClass(index); // add active class to the next slide
}
// helpers
function addActiveClass(i) {
    slides[i].classList.add('active');
}
function removeActiveClass(i) {
    slides[i].classList.remove('active');
}

function getNextIndex(index) {
    return (index + 1 ) % slides.length;
}

function getPrevIndex(index) {
    return (index - 1 + slides.length ) % slides.length;
}

// attach the triggers
nextLink.addEventListener('click', nextSlide);
prevLink.addEventListener('click', prevSlide);