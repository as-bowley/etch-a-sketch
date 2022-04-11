const container = document.getElementById("container");
const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener('click', resetBoard);

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

container.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains("grid-item")) {
        e.target.classList.add("highlight");
    }
})

function resetBoard() {
    for (const child of document.getElementById("container").children) {
        child.classList.remove("highlight");
    }
    container.style.setProperty('--grid-rows', 1);
    container.style.setProperty('--grid-cols', 1);
    createNewBoard()
}

function createNewBoard() {
    let userGridNumber = prompt("Please select number of squares per side for new grid. (max. 100)", "");
    console.log(userGridNumber, userGridNumber);
    while (userGridNumber > 100) {
        userGridNumber = prompt("Please pick a number below 100.", "");
    } 
    makeRows(userGridNumber, userGridNumber);
}


makeRows(16, 16);