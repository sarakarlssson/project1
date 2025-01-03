newRandomNumberButton.addEventListener("click", function () {


    newRandomNumberField.value = Math.floor(Math.random() * 100)
    let gridItems = document.querySelectorAll(".gridContainer div");

    for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].style.backgroundColor == "orange") {
            gridItems[i].style.backgroundColor = "lightgrey"
        }

        if (gridItems[i].textContent == newRandomNumberField.value) {
            gridItems[i].style.backgroundColor = "orange"
        }
    }
})

let removeButton = document.getElementById("removeButton");
let removeField = document.getElementById("removeField");

removeButton.addEventListener("click", function () {
    let gridItems = document.querySelectorAll(".gridContainer div");
    let targetNumberToRemove = 0;
    let isFound = false
    for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].textContent == newRandomNumberField.value) {
            removeField.value = gridItems[i].textContent + " removed "
            gridItems[i].style.backgroundColor = "lightpink"
            gridItems[i].textContent = "X"
            targetNumberToRemove += 1;

            isFound = true;
        }
    }
    removeField.value += targetNumberToRemove + " times "

    if (isFound == false) {
        removeField.value = "NOT FOUND"
    }


})