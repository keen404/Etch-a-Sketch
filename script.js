document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");

    const btn = document.createElement("button");
    // Add click event to button
        // Delete all the div inside container
        // Prompt user for grid size
        // Assign number to variable
        // Loop as grid size
            // Create a row div
            // Add class name "row"
            // Appended Child to container
            // Loop as grid size
                // Create a div
                // Add class name "aSqure"
                // Add event mosuseenter
                    // Changing "aSqure" background color to black
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