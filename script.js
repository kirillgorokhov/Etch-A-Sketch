
const container = document.querySelector('.container');
const defaultColour = 'black';


const rgbButton = document.getElementById('rgbButton');
const blackButton = document.getElementById('blackButton');
const eraserButton = document.getElementById('eraserButton');

let currentColour = defaultColour;

function setCurrentColour(newColour) {
    currentColour = newColour;
}

rgbButton.onclick = () => setCurrentColour('RGB');
blackButton.onclick = () => setCurrentColour('black');
eraserButton.onclick = () => setCurrentColour('white');

// function we'll need to cleanup the previous grid
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function changeColour(event) {
    if (currentColour === 'RGB') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
} else {
    event.target.style.backgroundColor = currentColour
}
};


    function createGrid(gridWidth) {
    removeAllChildNodes(container);
    container.style.setProperty('--gridWidth', gridWidth); 
    for (let i = 0; i < gridWidth*gridWidth; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  div.addEventListener('mouseover', changeColour)
  container.appendChild(div);
}
};

// prompt upon a button click
const changeSize = document.getElementById('changeSize');
changeSize.addEventListener('click', promptSize);

//resetting the grid to a new size based on the user's input
function promptSize() {
    gridWidth = prompt('What\'s the number of squares per side for the new grid?', 16);
    if (gridWidth >1 && gridWidth < 100)
    {
    createGrid(gridWidth);
}
    else {
        do {
            gridWidth = prompt("Invalid size! Try Again! Make sure your value is between 2 and 100!");
        }
        while(gridWidth < 2 || gridWidth > 100);
        createGrid(gridWidth);
    }
};


createGrid(16);




// function that creates a default grid
// reset button allows to input a value - number of squares per side for the new grid
// grid is redrawn based on the value above
