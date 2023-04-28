function getHex() {
  let colorHex = "#";
  const symbols = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    colorHex = colorHex + symbols[Math.floor(Math.random() * 16)];
  }

  return colorHex;
}

function changeColors() {
  const boxes = document.querySelectorAll(".box");
  const hexValue = document.querySelectorAll(".hex-color")

  for (let i = 0; i < boxes.length; i++) {
    let color = getHex();
    hexValue[i].innerHTML = color;
    boxes[i].style.background = color;
  }
}
changeColors()

document.addEventListener("keyup", (e) => {
  if (e.code == "Space") {
    changeColors();
  }
});

document.addEventListener("click", e => {
    if(e.target.className == 'hex-color') {
        let id = e.target.parentElement.id
        const boxClicked = document.getElementById(id);
        let newColor = getHex();
        boxClicked.style.background = newColor;

        const buttonClicked = boxClicked.firstElementChild
        buttonClicked.innerHTML = newColor;
    }
    
})

