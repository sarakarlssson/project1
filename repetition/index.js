function repetition() {

    let mostRepeatedNumberField = document.getElementById("mostRepeatedNumberField")
    let gridItems = document.querySelectorAll(".gridContainer div");

    let repeatedNumberCounter = 0;
    let compareNumber;
    let mostRepeatedNumber = -Infinity
    let theMostRepeatedNumber;
    let array = []

    // loopa igenom array, i är compareNumber

    //en till loop i den yttre loopen som är j
    //ifall compareNumber är samma som j.textcontent så ska countern +1, samt diven ska få grön färg samt den blir tilldelad the mostrepeated number
    // om countern är större än mostRepeatedNumber så blir mostrepeated number countern och sätts i input fältet 
    //om countern är samm som mostRepeatednumber så sätter inputfältet += det nya comparenumber

    //

    // Yttre loop: gå igenom alla element
    for (let i = 0; i < gridItems.length; i++) {
        let repeatedNumberCounter = 0;
        compareNumber = gridItems[i].textContent

        // Inre loop: räkna hur många gånger det aktuella numret förekommer
        for (let j = 0; j < gridItems.length; j++) {
            if (gridItems[j].textContent == compareNumber) {
                repeatedNumberCounter++
            }
        }
        if (repeatedNumberCounter > mostRepeatedNumber) {
            mostRepeatedNumber = repeatedNumberCounter
            theMostRepeatedNumber = compareNumber;
        }
        else if (repeatedNumberCounter == mostRepeatedNumber) {
            if (!theMostRepeatedNumber.includes(compareNumber)) {

                mostRepeatedNumber += repeatedNumberCounter
                theMostRepeatedNumber += ", " + compareNumber;
            }
        }
    }
    for (let k = 0; k < gridItems.length; k++) {
        if (gridItems[k].textContent == theMostRepeatedNumber) {
            gridItems[k].style.backgroundColor = "green"
        }
    }
    mostRepeatedNumberField.value = theMostRepeatedNumber + ", (" + mostRepeatedNumber + ")"



















    // for (let i = 0; i < gridItems.length; i++) {
    //     array.push(gridItems[i].textContent)
    // }

    // for (let i = 0; i < array.length; i++) {
    //     compareNumber = i
    //     if (compareNumber == array[i]) {
    //         gridItems[i].style.backgroundColor = "red";
    //         gridItems[compareNumber].style.backgroundColor = "red"
    //         console.log("match")
    //     }
    // }


    // for (let i = 0; i < gridItems.length; i++) {
    //     compareNumber = gridItems[i].textContent

    //     for (let j = 0; j < gridItems.length; j++) {
    //         if (gridItems[j].textContent == compareNumber) {

    //             numberCounter++
    //         }
    //     }

    //     if (numberCounter == mostRepeatedNumber) {
    //         mostRepeatedNumberField.value = theMostRepeatedNumber += ", " + compareNumber + "(x)" + (numberCounter)
    //     }
    //     else if (numberCounter > mostRepeatedNumber) {
    //         mostRepeatedNumber = numberCounter
    //         theMostRepeatedNumber = compareNumber
    //         mostRepeatedNumberField.value = theMostRepeatedNumber + "(repeated " + numberCounter + " )times"
    //     }
    //     numberCounter = 0;
    // }

    // let numbersNotInPlaceField = document.getElementById("numbersNotInPlaceField")
    // let numbersNotInGridArray = []
    // let isFound = false;

    // for (let i = 0; i <= 100; i++) {
    //     isFound = false;
    //     for (let j = 0; j < gridItems.length; j++) {
    //         if (gridItems[j].textContent == i) {
    //             isFound = true
    //         }
    //     }
    //     if (isFound == false) {
    //         numbersNotInGridArray.push(i)
    //     }
    // }
    // numbersNotInPlaceField.value = numbersNotInGridArray
    // console.log(numbersNotInGridArray)

    // for (let i = 0; i < gridItems.length; i++) {
    //     if (gridItems[i].textContent == mostRepeatedNumberField.value) {
    //         console.log("tjenna")
    //     }
    // }


}

createButton.addEventListener("click", function () {
    repetition();
})

repetition()