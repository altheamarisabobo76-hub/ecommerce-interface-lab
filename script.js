// ===============================
// TASK 1: PRODUCT CLASS & DATA
// ===============================
class Product {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const products = [
  new Product(1, "Headphones", 59.99, "img1.jpg"),
  new Product(2, "Smart Watch", 129.99, "img2.jpg"),
  new Product(3, "Laptop", 899.99, "img3.jpg"),
  new Product(4, "Keyboard", 49.99, "img4.jpg"),
  new Product(5, "Mouse", 29.99, "img5.jpg"),
  new Product(6, "Speaker", 79.99, "img6.jpg"),
  new Product(7, "Camera", 499.99, "img7.jpg"),
  new Product(8, "Phone", 699.99, "img8.jpg"),
  new Product(9, "Tablet", 399.99, "img9.jpg"),
  new Product(10, "Charger", 19.99, "img10.jpg")
];

// ===============================
// GLOBAL CART
// ===============================
// 1. State (Cart Array)
let cart = [
    { id: 1, name: "Nike Shoes", price: 1500, image: "product1.jpg", qty: 1 }
];

// 2. Select Elements
const cartList = document.getElementById('cart-list');
const subtotalEl = document.getElementById('subtotal');
const emptyMsg = document.getElementById('empty-msg');

// 3. Render Cart
function renderCart() {
    cartList.innerHTML = ""; // clear list

    if (cart.length === 0) {
        emptyMsg.style.display = "block";
        subtotalEl.textContent = "Subtotal: ₱0";
        return;
    } else {
        emptyMsg.style.display = "none";
    }

    cart.forEach(item => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = item.image;

        const title = document.createElement('h3');
        title.textContent = item.name;

        const price = document.createElement('p');
        price.textContent = `₱${item.price}`;

        const label = document.createElement('label');
        label.textContent = "Qty: ";

        const input = document.createElement('input');
        input.type = "number";
        input.value = item.qty;
        input.min = 0;

        // store id in dataset
        input.setAttribute('data-id', item.id);

        label.appendChild(input);

        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(price);
        li.appendChild(label);

        cartList.appendChild(li);
    });

    // 4. Calculate total using reduce
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.qty);
    }, 0);

    subtotalEl.textContent = `Subtotal: ₱${total}`;
}

// Initial render
renderCart();

// 5. Event Delegation (Quantity Change)
document.body.addEventListener('input', function(event) {
    if (event.target.type === "number") {
        const id = event.target.getAttribute('data-id');
        const newQty = parseInt(event.target.value);

        const item = cart.find(p => p.id == id);

        if (item) {
            item.qty = newQty;

            // Remove if qty = 0
            if (newQty === 0) {
                cart = cart.filter(p => p.id != id);
            }

            renderCart();
        }
    }
});
// Select form
const form = document.getElementById('checkout-form');

// Inputs
const nameInput = document.getElementById('name');
const streetInput = document.getElementById('street');
const zipInput = document.getElementById('zip');
const paymentInputs = document.querySelectorAll('input[name="payment"]');

const paymentError = document.getElementById('payment-error');

// Submit Event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // 1. Prevent reload

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(e => e.textContent = "");
    document.querySelectorAll('input').forEach(i => i.classList.remove('error'));

    // 2. Validation Logic

    // Name
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        isValid = false;
    }

    // Street
    if (streetInput.value.trim() === "") {
        showError(streetInput, "Street is required");
        isValid = false;
    }

    // Zip
    if (zipInput.value.trim() === "") {
        showError(zipInput, "Zip Code is required");
        isValid = false;
    }

    // Payment
    let paymentSelected = false;
    paymentInputs.forEach(input => {
        if (input.checked) paymentSelected = true;
    });

    if (!paymentSelected) {
        paymentError.textContent = "Please select a payment method";
        isValid = false;
    }

    // 3. If valid
    if (isValid) {
        console.log("Order submitted successfully!");

        // Redirect (simulation)
        window.location.href = "thankyou.html";
    }
});

// Helper function
function showError(input, message) {
    input.classList.add('error');
    input.nextElementSibling.textContent = message;
}
const grid = document.querySelector(".product-grid");

grid.innerHTML += `
    <div class="product-card" id="product1">
        <h4>Nike Shoes</h4>
        <button class="add-to-cart">Add to Cart</button>
    </div>
`;

// One listener for all buttons (even new ones)
grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const card = e.target.parentElement;

        card.classList.add("fade-in");

        setTimeout(() => {
            card.classList.remove("fade-in");
        }, 500);
    }
});
