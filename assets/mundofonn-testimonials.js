function testimonialsSlider() {
    let slider = document.getElementById('testimonials-slider');
    let slidesToShow = slider.dataset.slides;

    new Glider(document.querySelector('.testimonials-glider'), {
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        draggable: false,
        dots: '.dots-test',
        duration: 0.90,
        itemWidth: 150,

        arrows: {
            prev: '.glider-prev-testimonials',
            next: '.glider-next-testimonials'
        }
    });
}

window.addEventListener('load', function() {
    testimonialsSlider();
});

let slider = document.getElementById('testimonials-slider');
let getSectionId = slider.getAttribute('data-sectionId');
console.log(getSectionId);

document.addEventListener("shopify:section:load", function(event) {
    if (event.detail.sectionId == getSectionId ) {
        testimonialsSlider();
    }
});

// ===========LOAD SLIDER PREVIEW WITH SET_INTERVAL===========
// setInterval(function() {
//     var slider = document.getElementById('testimonials-slider');
//     var slidesToShow = slider.dataset.slides;
//     new Glider(document.querySelector('.testimonials-glider'), {
//         slidesToShow: slidesToShow,
//         slidesToScroll: slidesToShow,
//         draggable: false,
//         dots: '.dots-test',
//         duration: 0.90,
//         itemWidth: 150,

//         arrows: {
//             prev: '.glider-prev-testimonials',
//             next: '.glider-next-testimonials'
//         }
//     });

// },10)