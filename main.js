//  Functions for adjusting #pie-quantity field

function plusOne() {
  var input = document.querySelector('#pie-quantity');
  input.stepUp();
}

function minusOne() {
  var input = document.querySelector('#pie-quantity');
  input.stepDown();
}