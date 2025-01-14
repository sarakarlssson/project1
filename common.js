
//skapa grid med random numbers
let container = document.getElementById("container")
let gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer")
let inputNumber = document.getElementById("inputNumber")
inputNumber.value = "95";
container.appendChild(gridContainer)
let createButton = document.getElementById("createButton")
let newRandomNumberButton = document.getElementById("newRandomNumberButton")
let newRandomNumberField = document.getElementById("newRandomNumberField")

function createRandomGrid(createNumberInput) {

    gridContainer.innerHTML = " "

    for (let i = 1; i <= createNumberInput; i++) {
        let div = document.createElement("div");
        let randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber == 0) {
            i -= 1;
            continue;
        }
        div.textContent = randomNumber;
        div.classList.add("numberDivs")
        div.style.backgroundColor = "lightgrey"
        gridContainer.appendChild(div)
    }
}

createButton.addEventListener("click", function () {
    createRandomGrid(inputNumber.value)
})

createRandomGrid(95)
