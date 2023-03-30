const addToCartButton = document.getElementById("addToCartButton");
const itemsCounter = document.getElementById("itemsCounter");
const decreaseItemButton = document.getElementById("decreaseItemButton");
const increaseItemButton = document.getElementById("increaseItemButton");
const itemQuantity = document.getElementById("itemQuantity"); 
const cartItemsQuantity = document.getElementById("cartItemsQuantity");
let totalCartItems = 0;
var notyf = new Notyf();

addToCartButton.addEventListener("click", function () {
  itemsCounter.style.display = "grid";
  this.style.display = "none";
  total = 1;
  cartItemsQuantity.style.display = "grid";
  cartItemsQuantity.innerText = total.toString();
  notyf.success("Items added to the cart");
});


decreaseItemButton.addEventListener("click", function () {
  let items = parseInt(itemQuantity.value);
  if (items <= 1) {
    addToCartButton.style.display = "grid";
    itemsCounter.style.display = "none";
    total = 0;
    cartItemsQuantity.style.display = "none";
    notyf.error("Item removed from the cart");
  } else {
    items = items - 1;
    itemQuantity.value = items.toString();
    total = total - 1;
    cartItemsQuantity.innerText = total.toString();
  }
});

increaseItemButton.addEventListener("click", function () {
  let items = parseInt(itemQuantity.value);
  items = items + 1;
  itemQuantity.value = items.toString();
  total = total + 1;
  cartItemsQuantity.innerText = total.toString();
});
