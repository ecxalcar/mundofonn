// function sliderPrimary() {
//     new Glider(document.querySelector('.glider-slider-yellow'), {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         draggable: false,
//         dots: '.doting',
//         duration: 0.90,
//         itemWidth: 150,

//         arrows: {
//             prev: '.glider-iz',
//             next: '.glider-der'
//         }
//     });
// }

// window.addEventListener('load', function() {
//     sliderPrimary();
// });

// let slider = document.getElementById('glider-slider-yellow');
// let getSectionIdSlider = slider.getAttribute('data-sliderId');
// console.log(getSectionIdSlider);

// document.addEventListener("shopify:section:load", function(event) {
//     if (event.detail.sectionId == getSectionIdSlider ) {
//         sliderPrimary();
//     }
// });


new Glider(document.querySelector('.glider-slider-yellow'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    dots: '.doting',
    duration: 0.90,
    itemWidth: 150,

    arrows: {
        prev: '.glider-iz',
        next: '.glider-der'
    }
});