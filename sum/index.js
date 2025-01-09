
let totalSumField = document.getElementById("totalSumField")
let totalSum = 0

//summa av alla siffror i create

function sumOfAllNumbers() {
    let gridItems = document.querySelectorAll(".gridContainer div");
    totalSum = 0;

    for (let i = 0; i < gridItems.length; i++) {
        totalSum += Number(gridItems[i].textContent)
    }
    totalSumField.value = totalSum;
}

createButton.addEventListener("click", function () {
    sumOfAllNumbers();
})

sumOfAllNumbers()

//summa av de markerade siffrorna 

let sumOfMarkedField = document.getElementById("sumOfMarkedField")
let totalSumOfMarkedNumbers = 0;
sumOfMarkedField.value = "-"

function sumOfMarkedNumbers() {

    if (event.target.style.backgroundColor = "mediumseagreen") {
        totalSumOfMarkedNumbers += Number(event.target.textContent)
    }
    sumOfMarkedField.value = totalSumOfMarkedNumbers;
}

gridContainer.addEventListener("click", function (event) {
    if (event.target === gridContainer) {
        return;
    }

    if (event.target.classList.contains("numberDivs")) {
        if (event.target.style.backgroundColor == "slategray") {
            event.target.style.backgroundColor = "mediumseagreen"
        }
    }
    sumOfMarkedNumbers(event)
})

let resetButton = document.getElementById("resetButton")

resetButton.addEventListener("click", function () {
    sumOfMarkedField.value = "-"
    totalSumOfMarkedNumbers = 0;

    gridItems = document.querySelectorAll(".gridContainer div");

    for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].style.backgroundColor == "mediumseagreen") {
            gridItems[i].style.backgroundColor = "lightgray"
        }
    }
})

createButton.addEventListener("click", function () {
    sumOfMarkedField.value = "-"
    totalSumOfMarkedNumbers = 0;
})