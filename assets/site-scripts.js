let modalBtn = document.querySelectorAll('.product-modal-btn');
let myModal = new bootstrap.Modal(document.getElementById('productModal'), {})

modalBtn.forEach(button => {
    button.addEventListener('click', function() {
        let productHandle = button.getAttribute('data-product-handle');
        console.log(productHandle);

        fetch('/products/' + productHandle + '.js')
            .then(response => response.json())
            .then(data => {
                    document.querySelector('.product-info img').src = data.featured_image;
                    document.querySelector('.modal-header h3').innerText = data.title;
                    document.querySelector('.product-info h5').innerText = data.price;
                    document.querySelector('.product-info p').innerHTML = data.description;
                }
            );
        myModal.show();
        myModal.hidden(function() {
            document.querySelector('.product-info img').src = '';
            document.querySelector('.modal-header h3').innerText = '';
            document.querySelector('.product-info h5').innerText = '';
            document.querySelector('.product-info p').innerHTML = '';
        });
    });

});
