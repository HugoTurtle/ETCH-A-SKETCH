const container = document.querySelector("#container");
const WIDTH_OF_CONTAINER = 550;

function createGridOfSquareDivs(gridDimension) {

    //Removes everything inside the container div
    container.innerHTML = "";

    const totalSquares = gridDimension * gridDimension;
    const squareSize = WIDTH_OF_CONTAINER / gridDimension;

    for(let i = 0; i < totalSquares; ++i) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.toggle("square");
        squareDiv.style.width = squareSize + "px";
        squareDiv.style.height = squareSize + "px";
        container.appendChild(squareDiv);
    }

}

createGridOfSquareDivs(16);

container.addEventListener("mouseover", (EVENT) => {
    let target = EVENT.target;
    target.style.background = "black";
})

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => {

    let input = +prompt("Input a number to reset grid (e.g 2 becomes 2x2 grid)",16);
    while(input > 100 || input < 0) {
        input = +prompt("Please input a valid number (e.g 2 becomes 2x2 grid)", 16);
    }
    createGridOfSquareDivs(input);

})