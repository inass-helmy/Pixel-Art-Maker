
// Select color input
var pickedColor = $("#colorPicker");
// Select size input
var sizeInput = $("#sizePicker");
var submitButton = $("input[type='submit']");
var resetButton = $("input[type='reset']");

var tableCanva = $("#pixelCanvas");
const height = $("#inputHeight");
const width = $("#inputWeight");
defaul();


// When size is submitted by the user, call makeGrid()
$(submitButton).on("click", function(event){
	event.preventDefault();
  tableCanva.empty();
	makeGrid(width,height);
	
});

function makeGrid(colNO,rowNo) {
 	if ((colNO.val()<=100) && (rowNo.val()<=100)){
 		for(let M = 0; M <rowNo.val(); M++){
			let row = $("<tr/>");
 		
 			for(let N = 0; N<colNO.val(); N++){
				row.append($("<td></td>"));

 			}
 			tableCanva.append(row)
 		}
 	}else alert("The maximum input number is 100, please try again.");

}
//reset button to reset the input values and clear the grid
$(resetButton).on("click", function(){

tableCanva.empty();
$("#randomPicker").css("background-color", "#faebd7");


});
//draw with a color depending on the user selection

$("#colorPicker").change(function(){
	let pickedColor = $(this).val();
	coloring(pickedColor);
});

//draw with a random color

$("#randomPicker").on("click", function(){
	let random = randomColor();
	$(this).css("background-color", random);

	coloring(random);
});

function coloring(color){
	$(tableCanva).css("background-color", "white");

    tableCanva.on("click","td", function(){
	$(this).css("background-color", color);
});
}

// generate a random color
function randomColor(){
 	//pick a "red" from 0 -255
 	var r = Math.floor(Math.random() * 256);
 	//pick a "green" from 0 -255
 	var g = Math.floor(Math.random() * 256);
 	//pick a "blue" from 0 -255
 	var b = Math.floor(Math.random() * 256);

 	return "rgb(" + r + ", " + g + ", " + b + ")";

 }
function defaul(){

	coloring(pickedColor.val());
}