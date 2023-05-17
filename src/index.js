function complimentaryColors() {
  const boxes = document.querySelectorAll(".box");
  const hexValue = document.querySelectorAll(".hex-color");

  let redColor = "";
  let greenColor = "";
  greenColor = Math.floor(Math.random() * 225).toString();
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
