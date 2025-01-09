let findTwoCellsButton = document.getElementById("findTwoCellsButton")
let addUpToNumberField = document.getElementById("addUpToNumberField")
let gridItems = document.querySelectorAll(".gridContainer div");


addUpToNumberField.value = 194;
let firstNumber;
let secondNumber;
let isFound = false


findTwoCellsButton.addEventListener("click", function () {
    isFound = false;
    for (let i = 0; i < gridItems.length; i++) {
        for (let j = i + 1; j < gridItems.length; j++) {
            firstNumber = gridItems[i].textContent;
            secondNumber = gridItems[j].textContent
            if (Number(firstNumber) + Number(secondNumber) == Number(addUpToNumberField.value)) {
                gridItems[i].style.backgroundColor = "moccasin"
                gridItems[j].style.backgroundColor = "moccasin"
                isFound = true;
                break
            }
        }
        if (isFound) {
            break;
        }
    }
})

createButton.addEventListener("click", function () {
    gridItems = document.querySelectorAll(".gridContainer div");

})