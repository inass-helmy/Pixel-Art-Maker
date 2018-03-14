// Select color input
const pickedColor = document.querySelector("#colorPicker");
const randomPicker = document.querySelector("#randomPicker");
// Select size input, sybmit and reset buttons
const sizeInput = document.querySelector("#sizePicker");
const submitButton = document.querySelector("input[type='submit']");
const resetButton = document.querySelector("input[type='reset']");

const tableCanva = document.querySelector("#pixelCanvas");
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWeight");
const clearCell = document.querySelector("#clearCell");

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    tableCanva.innerHTML = "";
    makeGrid(width, height);

});

function makeGrid(colNO, rowNo) {
    //limit the grid size to 100X100 cell
    if ((colNO.value <= 100) && (rowNo.value <= 100)) {
        for (let M = 0; M < rowNo.value; M++) {
            let row = document.createElement("tr");

            for (let N = 0; N < colNO.value; N++) {
                let td = document.createElement('td');

                row.appendChild(td);

            }
            tableCanva.appendChild(row);
        }
    } else alert("The maximum input number is 100, please try again.");
    coloring(pickedColor.value);

}

//reset button to reset the input values and clear the grid
resetButton.addEventListener("click", function() {

    tableCanva.innerHTML = "";
    randomPicker.style.background = "#faebd7";


});

//draw with a color depending on the user selection

pickedColor.addEventListener("change", function() {
    let pickedColor = this.value;
    coloring(pickedColor);
    console.log(pickedColor);
});

//draw with a random color

randomPicker.addEventListener("click", function() {
    let random = randomColor();
    this.style.background = random;

    coloring(random);
});

//start coloring by clicing on a certain cell
function coloring(color) {
    tableCanva.style.backgroundColor = "white";
    let td = tableCanva.getElementsByTagName("td");

    //color the cell on click and erase color on double click
    for (let i = 0; i < td.length; i++) {
        td[i].onclick = function() {
            td[i].style.background = color;
        };
        td[i].ondblclick = function() {
            td[i].style.background = "white";
        };
    }

}

//clear cells by clicking on the clear cells button
clearCell.addEventListener("click", function(event) {
    event.preventDefault();
    let td = tableCanva.getElementsByTagName("td");
    for (var i = 0; i <= td.length; i++) {
        td[i].style.background = "white";
    }
});


// generate a random color
function randomColor() {
    //pick a "red" from 0 -255
    const r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    const g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 -255
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}