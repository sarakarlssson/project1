let mostRepeatedNumberField = document.getElementById("mostRepeatedNumberField")
let numbersNotInPlaceField = document.getElementById("numbersNotInPlaceField")
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
        mostRepeatedNumber = numberCounter
        theMostRepeatedNumber = compareNumber
        if (compareNumber == theMostRepeatedNumber) {
            mostRepeatedNumberField.value = theMostRepeatedNumber + " repeated " + numberCounter + " times"
        }
        // if (compareNumber != theMostRepeatedNumber) {
        //     mostRepeatedNumberField.value += ", " + theMostRepeatedNumber

        // }
    }

    numberCounter = 0;
}

