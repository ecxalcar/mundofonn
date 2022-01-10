let modalBtn = document.querySelectorAll('.product-modal-btn');
let myModal = new bootstrap.Modal(document.getElementById('productModal'), {});

modalBtn.forEach(button => {
    button.addEventListener('click', function() {
        let productHandle = button.getAttribute('data-product-handle');
        let productPrice = button.getAttribute('data-product-price');
        console.log(productHandle);

        fetch('/products/' + productHandle + '.js')
            .then(response => response.json())
            .then(data => {
                    document.querySelector('.product-info img').src = data.featured_image;
                    document.querySelector('.modal-header h3').innerText = data.title;
                    document.querySelector('.product-info h5').innerText = productPrice;
                    document.querySelector('.product-info p').innerHTML = data.description;
                    
                    let productVariantSelected = document.querySelector('#productOption');
                    productVariantSelected.innerHTML = '';
                    data.variants.forEach(variant => {
                        productVariantSelected.options[productVariantSelected.options.length] = new Option(variant.name, variant.id)
                    });
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

var modalClose = document.getElementById('productModal');
modalClose.addEventListener('hidden.bs.modal', () => {
    document.querySelector('.product-info img').src = '';
    document.querySelector('.modal-header h3').innerText = '';
    document.querySelector('.product-info h5').innerText = '';
    document.querySelector('.product-info p').innerHTML = '';
});

let productFormModal = document.querySelector('#productFormModal');
let productForm = document.querySelector('#productFormModal');

productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let productVariantSelected = document.querySelector('#productOption').value;
    let productQuantitySelected = document.querySelector('#productQuantity').value;

    let formData = {
        'items': [
            {
                "id": productVariantSelected,
                "quantity": productQuantitySelected
            }
        ]
    }
    console.log(formData);

    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.status == 200) {   // *** This can be just `if (response.ok) {`
            console.log(response);      // *** This is premature
            let alertSuccess = document.querySelector('.alert');
            alertSuccess.addClassList('alert-success');
            alertSuccess.innerHTML = 'Product Added To Cart';
            alertSuccess.style.display = 'block';
            setTimeout(function(){
                alertSuccess.style.display = "none"; 
            }, 5000);
            return response.json();
        }
        // return response.json();

    })
    .catch((error) => {
        let alertSuccess = document.querySelector('.alert');
            alertSuccess.addClassList('alert-danger');
            alertSuccess.innerHTML = 'There was an error. You can try again';
            alertSuccess.style.display = 'block';
            setTimeout(function(){
                alertSuccess.style.display = "none"; 
            }, 5000);
        console.error('Error:', error);
        
    });
});
