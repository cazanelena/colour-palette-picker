/*function getHex() {
  let colorHex = "#";
  const symbols = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    colorHex = colorHex + symbols[Math.floor(Math.random() * 16)];
  }

  return colorHex;
}

function changeColors() {
  const boxes = document.querySelectorAll(".box");
  const hexValue = document.querySelectorAll(".hex-color");

  for (let i = 0; i < boxes.length; i++) {
    let color = getHex();
    hexValue[i].innerHTML = color;
    boxes[i].style.background = color;
  }
}
changeColors();

document.addEventListener("click", (e) => {
  if (e.target.className == "hex-color") {
    let id = e.target.parentElement.id;
    const boxClicked = document.getElementById(id);
    let newColor = getHex();
    boxClicked.style.background = newColor;

    const buttonClicked = boxClicked.firstElementChild;
    buttonClicked.innerHTML = newColor;
  }
});
*/

// Working on the Optional features

// Create a funtion that generate colors for each box

/*
function complimentaryColors() {
  const boxes = document.querySelectorAll(".box");
  const hexValue = document.querySelectorAll(".hex-color");


  let greenColor = "";
  let blueColor = "";
  let increase = 10;

  for (let i = 0; i < boxes.length; i++) {
    let redColor = Math.floor(Math.random() * 225)
    greenColor = (10 + increase).toString();
    blueColor = (10   + increase).toString();
    let rgb = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";

    boxes[i].style.background = rgb;
    hexValue[i].innerHTML = rgb;
    increase += 17;
  }
}
*/

function complimentaryColors() {
  const boxes = document.querySelectorAll(".box");
  const hexValue = document.querySelectorAll(".hex-color");

  let redColor = "";
  let greenColor = "";
  greenColor  = Math.floor(Math.random() * 225).toString();
  let blueColor = greenColor;
  let increase = 20;

  for (let i = 0; i < boxes.length; i++) {
    redColor = (10 + increase).toString();
    let rgb = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";

    boxes[i].style.background = rgb;
    hexValue[i].innerHTML = rgb;
    increase += 17;
  }
}

complimentaryColors();

document.addEventListener("keyup", (e) => {
  if (e.code == "Space") {
    complimentaryColors();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className == "hex-color") {
    let id = e.target.parentElement.id;
    const boxClicked = document.getElementById(id);

    const buttonClicked = boxClicked.firstElementChild.innerHTML;
    copyColor(boxClicked, buttonClicked);
  }
});

// Copy the color when click the button
const copyColor = (elem, hexValue) => {
  const colorElement = elem.querySelector(".hex-color");
  navigator.clipboard.writeText(hexValue).then(() => {
    colorElement.innerHTML = "Copied";
    setTimeout(() => (colorElement.innerText = hexValue), 1000);
  });
};

// Create a funtion that generates an array with all the colors in the palette
const getColorsData = () => {
  const colors = document.querySelectorAll(".box");
  const colorsArray = [];
  for (let i = 0; i < colors.length; i++) {
    colorsArray.push(colors[i].lastElementChild.innerHTML);
  }
  return colorsArray;
};

// Download a file witg the color palette values
const download = document.getElementById("download");
const blob = new Blob(getColorsData(), { type: "text/plain" });
download.href = URL.createObjectURL(blob);


