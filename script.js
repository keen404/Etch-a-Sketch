document.addEventListener("DOMContentLoaded", () => {
    const gridSize = +prompt("Grid size?");
    const container = document.querySelector("#container");
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("aSqure");
            container.appendChild(newDiv);
        }
    }
});