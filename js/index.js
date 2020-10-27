// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const price = Number(priceElement.innerHTML);
  const quantityElement = product.querySelector('.quantity input');
  const quantity = Number(quantityElement.value);
  let subtotal = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
 return subtotalElement.innerHTML = subtotal;
}
updateSubtotal(document);

function calculateAll() {
  const productDomElements = [...document.querySelectorAll('.product')];
  let total = productDomElements
    .map(product => {
      return updateSubtotal(product);
    })
    .reduce((a,b) => a+b, 0);

  return total
}

// ITERATION 3

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
