document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");

    const btn = document.createElement("button");
    btn.textContent = "New Grid";
    btn.addEventListener("click", () => {
        const allDiv = document.querySelectorAll(".row");
        allDiv.forEach(e => {
            e.remove();
        })

        let gridSize = -1;
        while (gridSize > 100 || gridSize < 0) {
            gridSize = +prompt("Grid Size?");
        }
        
        for (let i = 0; i < gridSize; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
            container.appendChild(rowDiv);
            for (let j = 0; j < gridSize; j++) {
                const squreDiv = document.createElement("div");
                squreDiv.classList.add("aSqure");
                squreDiv.addEventListener("mouseenter", () => {
                    squreDiv.style.backgroundColor = "black";
                })
                rowDiv.appendChild(squreDiv);
            }
        }
    })
    container.appendChild(btn);
    
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        container.appendChild(gridRow);
        for (let j = 0; j < 16; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("aSqure");
            newDiv.addEventListener("mouseenter", () => {
                newDiv.style.backgroundColor = "black";
            })
            gridRow.appendChild(newDiv);
        }
    }
});