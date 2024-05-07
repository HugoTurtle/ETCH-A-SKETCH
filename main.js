const container = document.querySelector("#container");

function createGridOfSquareDivs(gridDimension) {

    for(let i = 0; i < gridDimension * 2; ++i) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.toggle("square");
        container.appendChild(squareDiv);
    }

}
createGridOfSquareDivs(16);
