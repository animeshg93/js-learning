var operator = ""
var counter = 0;
var inputNumberLength = 16;
var isOperatorEntered = false;
var isCalculated = false;
const INPUT_SCREEN = "inputScreen";
var first;
var second;

function numberInput(button){
	// need this to clear the screen when user starts typing input after a calculation is done
	if(isCalculated){
		document.getElementById(INPUT_SCREEN).value = "";
		isCalculated = false;
	} 

	// keep appending numbers to screen until JS integer size limit
	if(counter < inputNumberLength){
		document.getElementById(INPUT_SCREEN).value += button.innerHTML;
		counter++;
	}

}

function operatorInput(button){
	// don't want the user to input multiple operators
	if(!isOperatorEntered) {
		operator = button.innerHTML;
		counter = 0;
		document.getElementById(INPUT_SCREEN).value += operator
		isOperatorEntered = true;
	}
}

function calculate(){
	var array = document.getElementById(INPUT_SCREEN).value.split(operator);
	first = parseInt(array[0]);
	second = parseInt(array[1]);
	switch(operator){
		case "+":
			document.getElementById(INPUT_SCREEN).value = (first+second);
			break;
		case "*":
			document.getElementById(INPUT_SCREEN).value = (first*second);
			break;
		case "/":
			document.getElementById(INPUT_SCREEN).value = (first/second);
			break;
		case "-":
			document.getElementById(INPUT_SCREEN).value = (first-second);
			break;
	}
	resetVariables()
}

function clearAll(){
	document.getElementById(INPUT_SCREEN).value = "";
	resetVariables();
}

function erase(){
	var currentInput = document.getElementById(INPUT_SCREEN).value;
	var lastChar = currentInput.charAt(currentInput.length-1);
	if(lastChar === operator){
		var array = document.getElementById(INPUT_SCREEN).value.split(operator);

		// resetting some flags to keep input restrictions correct
		isOperatorEntered = false;
		counter = array[0].length;
	} 
	else counter--;
	document.getElementById(INPUT_SCREEN).value = currentInput.substring(0,currentInput.length-1);
}

function resetVariables(){
	isCalculated = true;
	counter = 0;
	isOperatorEntered = false;
}