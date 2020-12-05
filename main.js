//  Database
const sizePrices = [
  { name: 'small', price: 200 },
  { name: 'medium', price: 300 },
  { name: 'large', price: 400 },
  { name: 'x-large', price: 500 }
];

const toppingsPrices = [
  { name: 'bacon', price: 100 },
  { name: 'chicken', price: 200 },
  { name: 'x-cheese', price: 200 },
  { name: 'olives', price: 300 },
  { name: 'pepperoni', price: 350 },
  { name: 'pineapples', price: 150 }
];

const crustPrices = [
  { name: 'classic', price: 300 },
  { name: 'charred', price: 300 },
  { name: 'crispy', price: 400 },
  { name: 'deep-dish', price: 450 },
  { name: 'gluten-free', price: 500 },
  { name: 'stuffed', price: 600 }
];

//  Functions for adjusting #pie-quantity field

function plusOne() {
  var input = document.querySelector('#pie-quantity');
  input.stepUp();
}

function minusOne() {
  var input = document.querySelector('#pie-quantity');
  input.stepDown();
}

// New Order Modal Functions

const newOrderForm = document.getElementById('new-order');
const sizeOptions = newOrderForm.querySelector('#size-grid').getElementsByTagName('label');

Array.from(sizeOptions).forEach(elem => {
  elem.addEventListener('click', function (event) {
    console.log(event.target.name);
  });
});

function makePizza() {
  console.log(sizeOptions.item(3).firstElementChild.name);
}