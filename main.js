const container = document.querySelector("#container");

function createGridOfSquareDivs(gridDimension) {

    gridDimension *= gridDimension;

    for(let i = 0; i < gridDimension; ++i) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.toggle("square");
        container.appendChild(squareDiv);
    }

}
createGridOfSquareDivs(16);
