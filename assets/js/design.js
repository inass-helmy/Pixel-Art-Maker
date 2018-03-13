// Select color input
const pickedColor = $("#colorPicker");
// Select size input, sybmit and reset buttons
const sizeInput = $("#sizePicker");
const submitButton = $("input[type='submit']");
const resetButton = $("input[type='reset']");

const tableCanva = $("#pixelCanvas");
const height = $("#inputHeight");
const width = $("#inputWeight");
const clearCell = $("#clearCell");
defaul();


// When size is submitted by the user, call makeGrid()
$(submitButton).on("click", function(event) {
    event.preventDefault();
    tableCanva.empty();
    makeGrid(width, height);

});

function makeGrid(colNO, rowNo) {
    //limit the grid size to 100X100 cell
    if ((colNO.val() <= 100) && (rowNo.val() <= 100)) {
        for (let M = 0; M < rowNo.val(); M++) {
            let row = $("<tr/>");

            for (let N = 0; N < colNO.val(); N++) {
                row.append($("<td></td>"));

            }
            tableCanva.append(row)
        }
    } else alert("The maximum input number is 100, please try again.");

}
//reset button to reset the input values and clear the grid
$(resetButton).on("click", function() {

    tableCanva.empty();
    $("#randomPicker").css("background-color", "#faebd7");


});
//draw with a color depending on the user selection

$(pickedColor).change(function() {
    let pickedColor = $(this).val();
    coloring(pickedColor);
});

//draw with a random color

$("#randomPicker").on("click", function() {
    let random = randomColor();
    $(this).css("background-color", random);

    coloring(random);
});

//start coloring by clicing on a certain cell
function coloring(color) {
    $(tableCanva).css("background-color", "white");

    tableCanva.on("click", "td", function() {
        $(this).css("background-color", color);
    });
    tableCanva.on("dblclick", "td", function() {
        $(this).css("background-color", "white");
    });

}

//clear cells by clicking on the clear cell button
$(clearCell).on("click", function(event) {
    event.preventDefault();
	$('td').css("background-color", "white");});


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

function defaul() {

    coloring(pickedColor.val());
} 