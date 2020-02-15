//cashing the Dom
const menuToggle = document.querySelector('.menubar');
const topToggle = document.querySelector('.top-toggler');
const bottomToggle = document.querySelector('.bottom-toggler');

//functions
const menuToggler = () => {
    topToggle.classList.toggle('rotate-downwards');
    bottomToggle.classList.toggle('rotate-upwards');
}

//eventListeners
menuToggle.addEventListener('click', menuToggler);

