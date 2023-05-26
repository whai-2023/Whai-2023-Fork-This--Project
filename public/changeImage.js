module.exports = {
  updateLavaImage,
  updateBaseImage,
}

function updateLavaImage() {
  const lavaColorSelect = document.getElementById('lava_color')
  const lavaImage = document.getElementById('lavaImage')
  const selectedLavaColor = lavaColorSelect.value

  // Replace the image source based on the selected color
  lavaImage.src = `./images/lavaLampBody/${selectedLavaColor}.png`
}

function updateBaseImage() {
  const baseColorSelect = document.getElementById('base_color')
  const baseImage = document.getElementById('baseImage')
  const selectedBaseColor = baseColorSelect.value

  // Replace the image source based on the selected color
  baseImage.src = `./images/lavaLampBase/${selectedBaseColor}.png`
}

