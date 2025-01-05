function repetition() {

    let mostRepeatedNumberField = document.getElementById("mostRepeatedNumberField")
    let gridItems = document.querySelectorAll(".gridContainer div");

    let numberCounter = 0;
    let compareNumber;
    let mostRepeatedNumber = -Infinity
    let theMostRepeatedNumber;

    for (let i = 0; i < gridItems.length; i++) {
        compareNumber = gridItems[i].textContent

        for (let j = 0; j < gridItems.length; j++) {
            if (gridItems[j].textContent == compareNumber) {
                numberCounter++
            }
        }
        if (numberCounter > mostRepeatedNumber) {
            mostRepeatedNumber = numberCounter
            theMostRepeatedNumber = compareNumber
            mostRepeatedNumberField.value = theMostRepeatedNumber
        }
        if (numberCounter == mostRepeatedNumber) {
            mostRepeatedNumberField.value = theMostRepeatedNumber += ", " + compareNumber + "(x)"

        }

        numberCounter = 0;
    }

    let numbersNotInPlaceField = document.getElementById("numbersNotInPlaceField")
    let numbersNotInGridArray = []
    let isFound = false;

    for (let i = 0; i <= 100; i++) {
        isFound = false;
        for (let j = 0; j < gridItems.length; j++) {
            if (gridItems[j].textContent == i) {
                isFound = true
            }
        }
        if (isFound == false) {
            numbersNotInGridArray.push(i)
        }
    }
    numbersNotInPlaceField.value = numbersNotInGridArray
    console.log(numbersNotInGridArray)

    for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].textContent == mostRepeatedNumberField.value) {
            console.log("tjenna")
        }
    }
}


createButton.addEventListener("click", function () {
    repetition();
})

repetition();