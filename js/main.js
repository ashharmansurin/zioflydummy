console.log('main js');

window.addEventListener('scroll', function (event) {
    let scroll = this.scrollY;
    console.log(scroll);
    const header = document.querySelector('header');
    if (scroll > 20) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
})
// toggle open
const toggleMenu = document.querySelector('.toggle-btn');
toggleMenu.addEventListener('click', function () {
    console.log('i am clicked');
    const navBar = document.querySelector('nav');
    navBar.classList.add('nav-open');
});
const toggleMenuClose = document.querySelector('.toggle-btn-cross');
toggleMenuClose.addEventListener('click', function () {
    console.log('i am clicked');
    const navBar = document.querySelector('nav');
    navBar.classList.remove('nav-open');
});
// recent added owl carousel slider jquery code

$('.recent-added-slider').owlCarousel({
    loop: true,
    margin: 50,
    stagePadding: 50,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})