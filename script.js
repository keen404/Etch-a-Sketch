document.addEventListener("DOMContentLoaded", () => {
    const gridSize = +prompt("Grid size?");
    const container = document.querySelector("#container");
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        container.appendChild(gridRow);
        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("aSqure");
            gridRow.appendChild(newDiv);
        }
    }
});