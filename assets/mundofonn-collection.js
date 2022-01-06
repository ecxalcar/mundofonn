function collectionProductSlider() {

    new Glider(document.querySelector('.glider-products'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        dots: '.dots',
        duration: 0.90,
        itemWidth: 150,

        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4
                }
            }
        ]
    });
}

window.addEventListener('load', function() {
    collectionProductSlider();
});

let sliderProducts = document.getElementById('glider-products-id');
let getCollectionId = sliderProducts.getAttribute('data-collectionId');
console.log(getCollectionId);

document.addEventListener("shopify:section:load", function(event) {
    if (event.detail.sectionId == getCollectionId ) {
        collectionProductSlider();
    }
});

// new Glider(document.querySelector('.glider-products'), {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     draggable: false,
//     dots: '.dots',
//     duration: 0.90,
//     itemWidth: 150,

//     arrows: {
//         prev: '.glider-prev',
//         next: '.glider-next'
//     },
//     responsive: [
//         {
//             breakpoint: 576,
//             settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3
//             }
//         },
//         {
//             breakpoint: 1024,
//             settings: {
//             slidesToShow: 4,
//             slidesToScroll: 4
//             }
//         }
//     ]
// });