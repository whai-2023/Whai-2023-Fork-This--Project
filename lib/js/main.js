let buttons = document.getElementsId('myForm')
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let value = this.value
    // Do something with value...

    console.log(value)
  })
}
