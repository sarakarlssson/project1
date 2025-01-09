let clearButton = document.getElementById("clearButton")
let gridItems = document.querySelectorAll(".gridContainer .numberDivs")


gridContainer.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        if (event.target.style.backgroundColor == "lightgrey") {
            event.target.style.backgroundColor = "skyblue"
        }
    }
})

gridContainer.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        if (event.target.style.backgroundColor == "skyblue") {
            event.target.style.backgroundColor = "lightgrey"
        }
    }
})

gridContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        // Första click: från skyblue -> orange + rensa text
        if (event.target.style.backgroundColor === "skyblue") {
            event.target.style.backgroundColor = "orange";
            event.target.textContent = " ";
        }
        // Andra click: från orange -> lightgrey + lägg till random number
        else if (event.target.style.backgroundColor === "orange") {
            event.target.style.backgroundColor = "skyblue";
            event.target.textContent = Math.floor(Math.random() * 101);
        }
    }
})

gridContainer.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        if (event.target.style.backgroundColor == "red") {
            event.target.style.backgroundColor = "orange"
        }
    }
})

gridContainer.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        if (event.target.style.backgroundColor == "orange") {
            event.target.style.backgroundColor = "red"
        }
    }
})


clearButton.addEventListener("click", function () {
    for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].style.backgroundColor == "red") {
            gridItems[i].style.backgroundColor = "lightgrey"
            gridItems[i].textContent = Math.floor(Math.random() * 101)
        }
    }
})

createButton.addEventListener("click", function () {
    gridItems = document.querySelectorAll(".gridContainer .numberDivs")
})