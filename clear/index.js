let clearButton = document.getElementById("clearButton")
let gridItems = document.querySelectorAll(".gridContainer .numberDivs")

gridContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        event.target.style.backgroundColor = "orange"
        event.target.textContent = " "

    }

})

gridContainer.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        event.target.style.backgroundColor = "skyblue"

    }

})

gridContainer.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        if (event.target.style.backgroundColor = "skyblue") {
            event.target.style.backgroundColor = "lightgrey"
        }
    }

})

// gridContainer.addEventListener("mouseover", function (event) {
//     if (event.target.classList.contains("numberDivs")) {
//         if (event.target.style.backgroundColor == "lightgrey") {
//             console.log("wihoo")
//             event.target.style.backgroundColor = "skyblue"
//         }
//     }

// })


// clearButton.addEventListener("click", function (event) {
//     for (let i = 0; i < gridItems.length; i++) {
//         console.log(event.target)
//         if (event.target.style.backgroundColor == lightgray) {

//         }
//     }
// })