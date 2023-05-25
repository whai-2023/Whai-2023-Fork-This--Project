// <script src="store.js" async></script> put in html head (async so loads before body)

// checks doc is loaded before accessing different parts //
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready
}

// below is event listeners for all items loaded at the begining of our document load //

function ready() {
  const removeCartItemsButton = document.getElementByClassName('btn-danger')

  for (let i = 0; i < removeCartItemsButton.length; i++) {
    let button = removeCartItemsButton[i]
    button.addEventListener('click', removeCartItem)
  }

  let addToCartButtons = getElementByClassName('shop-item-button')
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }

  document
    .getElementsByClassName('btn-purchase')[0]
    .addEventListener('click', purchaseClicked)
}

// EVENTS //

function purchaseClicked() {
  alert('Thanks for your purchase!')
  let cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement
  let title = shopItem.getElementByClassName('shop-item-title')[0].innerHTML
  let price = shopItem.getElementByClassName('shop-item-price')[0].innerHTML
  let imageSrc = shopItemgetElementByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  cartRow.innerHTML = title
  let carItems = document.getElementsByClassName('cart-items')[0]
  let cartRowContents = `
    <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow
    .getElementsByClassName('btn-danger')[0]
    .addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
  let buttonClicked = event.target
  console.log('clicked remove item button')
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0]
  let cartRows = cartItemContainer.getElementsByClassName('cart-row')
  let total = 0
  for (i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName('cart-price')[0]
    let quantityElement = cartRow.getElementsByClassName(
      'cart-quantity-input'
    )[0]
    let price = parseFloat(priceElement.innerHTML.replace('$', ''))
    let quantity = quantityElement.value
    total = total + (price + quantity)
  }
}

document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total
