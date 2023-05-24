const container = document.querySelector(".container");
const sizeBtn = document.getElementById("#size")
const randomBtn = document.getElementById("#randomBtn")
const eraserBtn = document.getElementById("#eraserBtn")
const clearBtn = document.getElementById("clearBtn")

// Creating grid
function createGrid(gridSize) {
    let gridArea = (gridSize * gridSize)
    for (let i = 0; i < gridArea; i++) {
        const cell = document.createElement("div");
        container.appendChild(cell).className = "cells"; 
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black"})       
    }
    // let cells = document.querySelectorAll("cells");
    // cells.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

// Default grid size 
createGrid(16);

// User changes grid size
function changeSize(input) {
    if (input <=100 && input >=2) {
        createGrid(input);
    } else {
        alert("Please enter a number between 2 and 100");
    }
}

// Clear grid button
// function clearGrid() {
//     let cell = document.getElementsByClassName(".cells");
//     clearBtn.addEventListener("click", () => {
//         cell.style.backgroundColor = "blue";
//     })
// }

// clearGrid();

// clearBtn.addEventListener("click", () => {
//     document.querySelectorAll(".cells").style.backgroundColor = "blue";
// })

// function clearGrid() {
//     let cell = document.querySelectorAll(".cells");
//     cell.style.backgroundColor = "blue";
// }

// clearBtn.addEventListener("click", () => {
//             clearGrid();
//         })