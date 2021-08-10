/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
var product3 = {
  id: 3,
  name: "Tristar RK-6126",
  price: 22.45,
  stock: 10
};
var product4 = {
  id: 4,
  name: "Conga RockStar 900 Ultimate ErgoWet",
  price: 220,
  stock: 5
};
var product5 = {
  id: 5,
  name: "StrongTitanium 19000",
  price: 29,
  stock: 10
};

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

/* 3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice. */

function addToShoppingCart(id){
  products.forEach(product => {
    if(product.id === id) {
       shoppingCart.selectedProducts.push(product)
       shoppingCart.totalPrice += product.price;
    }
  })
}

/* 4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore */
function removeFromShoppingCart(id){
   products.forEach(product => {
     if(product.id === id) {
       shoppingCart.selectedProducts.slice(product)
       shoppingCart.totalPrice -= product.price;
     }
   }) 

}

/*5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products */
function shop(id){
  products.forEach(product => {
    if(product.id === id) {
      shoppingCart.totalPrice = 0;
      product.stock -= 1;
    }
  })
}
/* 6. If there is not enough stock, the product cannot be added to the shopping cart */

function notEnough() {
  products.forEach(product => {
    if(product.stock < shoppingCart.selectedProducts){
      return `Selected product is not enough`
    }
  })
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));