let gridItems = document.querySelectorAll(".gridContainer div");
let resetButton = document.getElementById("resetButton");
let resetButtonText = document.getElementById("resetButtonText");

let counter = 0;



gridContainer.addEventListener("click", function (event) {
    counter = 0;

    if (event.target.classList.contains("numberDivs")) {
        event.target.style.backgroundColor = "mediumseagreen"
        for (let i = 0; i < gridItems.length; i++) {
            if (gridItems[i].textContent == event.target.textContent) {
                gridItems[i].style.backgroundColor = "mediumseagreen"
                counter++
            } else {
                gridItems[i].style.backgroundColor = "lightgrey"

            }
        }
        resetButtonText.textContent = counter + " copies of the number: " + event.target.textContent;
    }
})

createButton.addEventListener("click", function () {
    gridItems = document.querySelectorAll(".gridContainer div");
})

resetButton.addEventListener("click", function () {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "lightgrey"
        resetButtonText.textContent = "Click on a number to find copies"
    }
})