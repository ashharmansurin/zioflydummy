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

// window.addEventListener('scroll', function (event) {
//     let scroll = this.scrollY;
//     console.log(scroll);
//     // const header = document.querySelector('header');
//     // if (scroll > 20) {
//     //     header.classList.add('scroll-header');
//     // } else {
//     //     header.classList.remove('scroll-header');
//     // }
// });