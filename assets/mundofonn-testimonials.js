
setInterval(function() {
    var slider = document.getElementById('testimonials-slider');
    var slidesToShow = slider.dataset.slides;
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

},10)