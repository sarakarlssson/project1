
//skapa grid med random numbers
let container = document.getElementById("container")
let gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer")
let inputNumber = document.getElementById("inputNumber")
container.appendChild(gridContainer)
let createButton = document.getElementById("createButton")
let newRandomNumberButton = document.getElementById("newRandomNumberButton")
let newRandomNumberField = document.getElementById("newRandomNumberField")

function createRandomGrid(inputNumber) {
    gridContainer.innerHTML = " "

    for (let i = 1; i <= inputNumber; i++) {
        let div = document.createElement("div");
        let randomNumber = Math.floor(Math.random() * 100);
        div.textContent = randomNumber;
        gridContainer.appendChild(div)
    }

}

//skapar en ny grid med random nummer när du klickar på createknappen
createButton.addEventListener("click", function () {
    createRandomGrid(inputNumber.value)
})

createRandomGrid(95)