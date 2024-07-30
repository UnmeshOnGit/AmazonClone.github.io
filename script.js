let form  = document.querySelector(".list-product");
let formBtn = document.querySelector(".seller");
let productImage = document.getElementById('product-image');
let cartBtn = document.querySelector(".cart");
let cartItem = document.querySelector('.cart-item')
let sellerName;
let productDesc;
let productName;
let productPrice;
let imgElement;

window.onload = () => {
    loadAllItems();
}

formBtn.addEventListener('click' , () =>{
    form.classList.toggle("list-product-active");
})

cartBtn.addEventListener('click' , () => {
    cartItem.classList.toggle("cart-item-active");
})

// document.getElementById("closeBtn").addEventListener('click' , () => {
//     cartItem.classList.remove("cart-item-active");
// })

let productListForm = document.getElementById("product-form");
productListForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get the values of form fields by their IDs or names
    sellerName = document.getElementById('seller-name').value;
    productName = document.getElementById('product-name').value;
    productPrice = document.getElementById('product-price').value;
    productDesc = document.getElementById('product-desc').value;
    // productImage = document.getElementById('product-image');
    
    displayProduct();
});


productImage.addEventListener('change', function(event) {
    // Get the selected file from the input field
    var file = event.target.files[0];

    // Check if a file was selected
    if (file) {
        // Create a new FileReader object
        var reader = new FileReader();

        // Define the onload event handler
        reader.onload = function(event) {
            // Create a new image element
            imgElement = document.createElement('img');
            imgElement.style.height = "150px"

            // Set the source of the image to the data URL
            imgElement.src = event.target.result;
            // console.log(imgElement);
            // Display the image in the image container
            // var imageContainer = document.querySelector('.top');
            // imageContainer.innerHTML = ''; // Clear previous content
            // imageContainer.appendChild(imgElement);
        };

        // Read the selected file as a Data URL
        reader.readAsDataURL(file);
    }
});




function displayProduct(){
    let div = document.createElement('div');
    div.innerHTML = `
        <div class="item">
        <div class="top">
        <img src="images/item-5.jpg" height="130px" alt="">
        </div>
        <div class="bottom">
            <div class="name-of-product">${productName} . . .</div>
            <div class="ratings">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i>4 Star rating</i>
            </div>
            <div class="price">₹${productPrice}</div>
            <div class="description"><p id="seller-name-card" >${sellerName}</p> ${productDesc} </div>
            <div class="add-to-cart">Add to Cart</div>
        </div>
    </div>`

    document.querySelector('.horizontal-card').appendChild(div);
    saveItems();
}




// // Function to save content of all divs to localStorage
// function saveItems() {
//     var divs = document.querySelectorAll('.item'); // Assuming all divs have the same class
//     divs.forEach(function(div, index) {
//         var divContent = div.innerHTML;
//         localStorage.setItem('divContent_' + index, divContent);
//     });
// }


// function loadAllItems() {
//     var divs = document.querySelectorAll('.item'); // Assuming all divs have the same class
//     divs.forEach(function(div, index) {
//         var savedContent = localStorage.getItem('divContent_' + index);
//         console.log(savedContent);
//         if (savedContent) {
//             div.innerHTML = savedContent;
//         }
//     });
// }



// function createHorizontalCard(){
//     let horizontalDiv = document.createElement("div");
//     horizontalDiv.classList.add("horizontal-card");
//     document.querySelector(".vertical-cards").appendChild(horizontalDiv);
// }