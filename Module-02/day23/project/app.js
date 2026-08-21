//State stores the important information of our app.
const state = {
  // All dishes from menu.json
  dishes: [],
  // Dishes that the user added to the cart
  cart: [],
  // Text typed into the search box
  search: "",
};

//  We select the HTML elements that JavaScript needs.
const menuEl = document.querySelector("#menu");
// Search input
const searchEl = document.querySelector("#search");
// Spicy filter button
const spicyBtn = document.querySelector("#btn-spicy");
// Cart area
const cartEl = document.querySelector("#cart-items");
// Number of items shown near the cart
const navCartCount = document.querySelector("#nav-cart-count");
// Total shown near the cart
const navCartTotal = document.querySelector("#nav-cart-total");
// Text above the cart
const cartItemCountLabel = document.querySelector("#cart-item-count-label");
// Subtotal
const subtotalEl = document.querySelector("#subtotal-val");
// Grand total
const totalEl = document.querySelector("#grandtotal-val");
// Checkout button
const checkoutBtn = document.querySelector("#checkout-btn");

//  fetch() gets our menu.json file.
//  Then we put the JSON data into state.dishes.

async function loadMenu() {
  // Show a message while the menu is loading
  menuEl.textContent = "Loading menu...";
  try {
    // cet the json file by fetch menu.json
    const response = await fetch("data/menu.json");

    // check if the request was successful
    if (!response.ok) {
      throw new Error("Could not load menu");
    }
    // convert json into JavaScript data 
    state.dishes = await response.json();
    // display the dishes
    render();
  } catch (error) {
    // show an error if something went wrong
    menuEl.textContent = "Could not load the menu.";
  }
}

//  render() updates what the user sees.

function render() {
  // get the search text and make it lowercase
  const term = state.search.toLowerCase();
  // used to filter the dishes
  const shown = state.dishes.filter((dish) => {
    // check if the dish name matches the search
    const matchesSearch = dish.name.toLowerCase().includes(term);
    // check if Spicy Only is active
    const matchesSpicy =
      !spicyBtn.classList.contains("active") || dish.spicy === true;

    // the dish must pass both filters
    return matchesSearch && matchesSpicy;
  });

  // if nothing is found
  if (shown.length === 0) {
    menuEl.innerHTML = "<p>No dishes found.</p>";
    // Still update the cart
    renderCart();
    return;
  }

  //  create the food cards
  menuEl.innerHTML = shown
    .map(
      (dish) => `
    <article class="card" data-id="${dish.id}">
      <div class="card-body">
        <div>
          <h3 class="card-title">${dish.name}</h3>
          <p class="card-desc">
            ${dish.spicy ? "Spicy" : "Not Spicy"}
          </p>
        </div>
        <div class="card-footer">
          <span class="price">${dish.price} ETB</span>
          <button class="btn">Add</button>
        </div>
      </div>
    </article> `,
    )
    .join("");

  // Update the cart too
  renderCart();
}
// to search files by typing 

searchEl.addEventListener("input", (event) => {
  // store what the user typed
  state.search = event.target.value;
  // Render the menu again
  render();
});

//clicking this button turns the Spicy filter on/off.
//we don't need to put spicyOnly inside state.
//instead, we use the button's "active" class.

spicyBtn.addEventListener("click", () => {
  // Turn the active class on or off
  spicyBtn.classList.toggle("active");
  // Render the menu again
  render();
});
//  we listen for clicks inside the whole menu.
//  this is called event delegation.
//  it also works for cards created by JavaScript.

menuEl.addEventListener("click", (event) => {
  // stop if the clicked element is not an Add button
  if (!event.target.matches(".btn")) {
    return;
  }
  // find the card containing the clicked button
  const card = event.target.closest(".card");
  // Get the dish id from data-id
  const id = Number(card.dataset.id);
  // find the actual dish in state.dishes
  const dish = state.dishes.find((dish) => dish.id === id);

  // check if this dish is already in the cart
  const cartItem = state.cart.find((item) => item.id === id);
  if (cartItem) {
    // if it already exists, increase quantity
    cartItem.qty++;
  } else {
    // if it doesn't exist, add it with quantity 1
    state.cart.push({
      ...dish,
      qty: 1,
    });
  }
  // save the updated cart
  save();
  // update the screen
  render();
});

//  calculate the total cart
//  reduce() adds all:
//  price × quantity
//  together.

function cartTotal() {
  return state.cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);
}
//  render the cart
//  This displays everything inside the cart.
function renderCart() {
  // Count the total number of items
  const itemCount = state.cart.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  // calculate the total price
  const total = cartTotal();
  // update the information here
  navCartCount.textContent = `${itemCount} items`;
  navCartTotal.textContent = `${total} ETB`;
  cartItemCountLabel.textContent = `${itemCount} items selected`;
  subtotalEl.textContent = `${total} ETB`;
  totalEl.textContent = `${total} ETB`;

  //  if the cart is empty display this
  if (state.cart.length === 0) {
    cartEl.innerHTML = "<p>No items yet.</p>";
    return;
  }

  // this where we create cart items
  cartEl.innerHTML = state.cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}">
      <div>
        <p class="cart-item-title">
          ${item.name}
        </p>
        <p class="cart-item-price">
          ${item.price} ETB × ${item.qty}
        </p>
      </div>
      <div class="qty-box">
        <button class="btn-qty decrease">-</button>
        <span>${item.qty}</span>
        <button class="btn-qty increase">+</button>
        <button class="btn-qty remove">×</button>
      </div>
    </div>  `,
    )
    .join("");
}

// this is where how the cart button works
//    One listener handles:
//    + Increase
//    - Decrease
//    × Remove

cartEl.addEventListener("click", (event) => {
  // find the cart item that contains the clicked button
  const cartItem = event.target.closest(".cart-item");
  // if the click wasn't inside a cart item, stop
  if (!cartItem) {
    return;
  }
  // get the dish ID
  const id = Number(cartItem.dataset.id);
  // find the item in the cart
  const item = state.cart.find((item) => item.id === id);
  // increase quantity
  if (event.target.matches(".increase")) {
    item.qty++;
  }

  // decrease quantity
  if (event.target.matches(".decrease")) {
    item.qty--;
    // if quantity becomes 0, remove the item
    if (item.qty <= 0) {
      state.cart = state.cart.filter((item) => item.id !== id);
    }
  }

  // remove the item completely
  if (event.target.matches(".remove")) {
    state.cart = state.cart.filter((item) => item.id !== id);
  }
  // save the new cart
  save();
  // update the screen
  render();
});

// this is where we save
//    localStorage can only store strings.
//    JSON.stringify() changes our cart array intoa string so we can save it.

function save() {
  localStorage.setItem("addisEatsCart", JSON.stringify(state.cart));
}
//  get the saved cart from localStorage.
//  try/catch protects the app if the saved data is corrupted.

function load() {
  try {
    // get saved cart
    const savedCart = localStorage.getItem("addisEatsCart");
    // gf there is saved data, convert it back to an array
    if (savedCart) {
      state.cart = JSON.parse(savedCart);
    }
  } catch (error) {
    // if the saved data is broken, start with an empty cart
    state.cart = [];
  }
}
// checkout
const paymentForm = document.querySelector("#payment-form");
const paymentTotal = document.querySelector("#payment-total");
const customerName = document.querySelector("#customer-name");
const customerPhone = document.querySelector("#customer-phone");
const paymentError = document.querySelector("#payment-error");
const payBtn = document.querySelector("#pay-btn");

checkoutBtn.addEventListener("click", () => {
  // check if the cart is empty
  if (state.cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  // get the current cart total
  const total = cartTotal();
  // show the payment form
  paymentForm.style.display = "block";
  // how the total inside the payment form
  paymentTotal.textContent = `${total} ETB`;

  // clear any previous error
  paymentError.textContent = "";
});

//  telebir payment form
//  When the user clicks Pay:
//   Validate the form
//   Show success message
//   Empty the cart
//   Save the empty cart
//   Reset the form
//   Update the screen

payBtn.addEventListener("click", () => {
  // get the values entered by the user
  const name = customerName.value.trim();
  const phone = customerPhone.value.trim();

  // check if the name is empty
  if (name === "") {
    paymentError.textContent = "Please enter your name.";

    return;
  }

  // ethiopian phone number pattern
  const phonePattern = /^(09|07\d{8}|\+2519\d{8})$/;
  // check the phone number
  if (!phonePattern.test(phone)) {
    paymentError.textContent = "Please enter a valid Ethiopian phone number.";
    return;
  }

  // payment is successful
  paymentError.textContent = "Payment successful! Your order has been placed.";
  //  how to make empty the cart
  state.cart = [];
  // save the empty cart to localStorage
  save();
  // how we resat the form
  customerName.value = "";
  customerPhone.value = "";
  // update the screen or render the screen

  render();
  // hide the payment form after a short moment
  setTimeout(() => {
    paymentForm.style.display = "none";
    paymentError.textContent = "";
  }, 2000);
});

//  When the page starts:
//   Load the saved cart
//   Load the menu from JSON

function init() {
  // restore the previous cart
  load();
  // load the menu
  loadMenu();
}

init();
