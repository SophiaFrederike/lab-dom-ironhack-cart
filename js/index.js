// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
 
  const quantity = product.querySelector('.quantity input').value;

  const subtotalPrice = (price * quantity);  

  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = `${subtotalPrice}`
  return subtotalPrice;


}




function calculateAll() {

  // ITERATION 2
  let total = 0;
  const allProducts = document.querySelectorAll('.product').forEach(function(product){
    total+= updateSubtotal(product);
    return total 
  });
  console.log(total);
  

  // ITERATION 3
  
  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const Parent = target.parentNode.parentNode;
  Parent.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
 
  const productName = document.getElementById('newProductName');
  const productPrice = document.getElementById('newProductPrice');

  const newProductRow = document.insertRow(-1);

  function addRow(tableID) {
    // Get a reference to the table
    let tableRef = document.getElementById(tableID);
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
  
    // Insert a cell in the row at index 0
    let newCellone = newRow.insertCell(0);
    let newCelltwo = newRow.insertCell(1);
    // Append a text node to the cell
    productName = document.createTextNode('New bottom row');
    newCellone.appendChild(productName);

    productPrice = document.createTextNode('New bottom row');
    newCelltwo.appendChild(productPrice);
  }
  // Call addRow() with the table's ID
  addRow('cart');



  //newProductRow.innerHTML = productName + productPrice;

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove').forEach(function(button){
    button.addEventListener('click', removeProduct);
  });


 const createProduct = document.getElementById('create');
 createProduct.addEventListener('click', createProduct);

});

