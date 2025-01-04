
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


//summa av de markerade siffrorna 

sumOfAllNumbers()