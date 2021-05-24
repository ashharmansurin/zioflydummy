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

// recent added owl carousel slider jquery code

$('.recent-added-slider').owlCarousel({
    loop: true,
    margin: 50,
    stagePadding: 50,
    nav: true,
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