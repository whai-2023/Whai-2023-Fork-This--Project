// JavaScript code
document.addEventListener('DOMContentLoaded', () => {
  const changeLavaButton = document.querySelector('#changeLava')
  const changeBaseButton = document.querySelector('#changeBase')
  const lavaImage = document.querySelector('#lavaImage')
  const baseImage = document.querySelector('#baseImage')

  const products = [
    { id: 1, image: '/path/to/lava/image1.png' },
    { id: 2, image: '/path/to/lava/image2.png' },
    { id: 3, image: '/path/to/lava/image3.png' },
    // Add more images here
  ]

  let currentLavaIndex = 0
  let currentBaseIndex = 0

  changeLavaButton.addEventListener('click', () => {
    currentLavaIndex = (currentLavaIndex + 1) % products.length
    lavaImage.src = products[currentLavaIndex].image
  })

  changeBaseButton.addEventListener('click', () => {
    currentBaseIndex = (currentBaseIndex + 1) % products.length
    baseImage.src = products[currentBaseIndex].image
  })
})
