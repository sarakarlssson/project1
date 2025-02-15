let removeButton = document.getElementById("removeButton");
let removeField = document.getElementById("removeField");

newRandomNumberField.value = "-"

newRandomNumberButton.addEventListener("click", function () {
    removeField.value = "-"
    newRandomNumberField.value = Math.floor(Math.random() * 100)
    let gridItems = document.querySelectorAll(".gridContainer div");

    for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].style.backgroundColor == "orange") {
            gridItems[i].style.backgroundColor = "lightgrey"
        }

        if (gridItems[i].textContent == newRandomNumberField.value) {
            gridItems[i].style.backgroundColor = "orange"
            gridItems[i].classList.add("markedOrange")
        }
    }
})

removeField.value = "-"

removeButton.addEventListener("click", function () {
    let gridItems = document.querySelectorAll(".gridContainer div");
    let targetNumberToRemove = 0;
    let isFound = false

    for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].textContent == newRandomNumberField.value) {
            removeField.value = gridItems[i].textContent + " removed "
            gridItems[i].style.backgroundColor = "lightcoral"
            gridItems[i].textContent = "X"
            targetNumberToRemove += 1;

            isFound = true;
        }
    }
    removeField.value += targetNumberToRemove + " times "

    if (isFound == false) {
        removeField.value = "Nothing to remove"
    }
})

let gridItems = document.querySelectorAll(".gridContainer div");

gridContainer.addEventListener("mouseover", function (event) {
    if (event.target.tagName === "DIV") {
        if (event.target.style.backgroundColor === "orange") {
            event.target.style.backgroundColor = "moccasin";
        }
        if (event.target.style.backgroundColor === "lightcoral") {
            event.target.style.backgroundColor = "lightpink";
        }
        if (event.target.style.backgroundColor == "lightgrey") {
            event.target.style.backgroundColor = "moccasin"
        }

    }
});

gridContainer.addEventListener("mouseout", function (event) {
    if (event.target.tagName === "DIV") {

        if (event.target.style.backgroundColor === "lightpink" && (event.target.textContent == "X")) {
            event.target.style.backgroundColor = "lightcoral";
        }

        if (event.target.style.backgroundColor === "moccasin") {
            event.target.style.backgroundColor = "lightgrey";
        }

        if (event.target.classList.contains("markedOrange") && (event.target.textContent != "X")) {
            event.target.style.backgroundColor == "moccasin";
            event.target.style.backgroundColor = "orange"

        }

    }

});