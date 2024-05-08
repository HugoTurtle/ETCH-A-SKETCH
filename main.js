const container = document.querySelector("#container");
const WIDTH_OF_CONTAINER = 550;

function createGridOfSquareDivs(gridDimension) {

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
