var operator = ""
var counter = 0;
var inputString = ""
var inputNumberLength = 3;
var isOperator = false;
var isCalculated = false;
var opRegex = /-|\+|\*|\//
var first;
var second;

function numberInput(button){
	// need this to clear the screen when user starts typing input after a calculation is done
	if(isCalculated){
		document.getElementById("inputScreen").value = "";
		isCalculated = false;
	} 

	// keep appending numbers to screen until JS integer size limit
	if(counter < inputNumberLength){
		inputString += button.innerHTML
		document.getElementById("inputScreen").value += button.innerHTML;
		counter++;
	}

}

function operatorInput(button){
	// don't want the user to input multiple operators
	if(!isOperator) {
		operator = button.innerHTML;
		//parsing the screen value, since parsing the "inputString" value will create complications in calculations
		first = parseInt(document.getElementById("inputScreen").value);
		counter = 0;
		inputString = "";
		document.getElementById("inputScreen").value += operator
		isOperator = true;
	}
}

function calculate(){
	second = parseInt(inputString);
	switch(operator){
		case "+":
			document.getElementById("inputScreen").value = (first+second);
			break;
		case "*":
			document.getElementById("inputScreen").value = (first*second);
			break;
		case "/":
			document.getElementById("inputScreen").value = (first/second);
			break;
		case "-":
			document.getElementById("inputScreen").value = (first-second);
			break;
	}
	resetVariables()
}

function clearAll(){
	document.getElementById("inputScreen").value = "";
	resetVariables();
}

function erase(){
	var currentInput = document.getElementById("inputScreen").value;
	var lastChar = currentInput.charAt(currentInput.length-1);
	if(lastChar.match(opRegex)){
		isOperator = false;
		counter = first.length	
	} 
	else counter--;
	document.getElementById("inputScreen").value = currentInput.substring(0,currentInput.length-1);
}

function resetVariables(){
	isCalculated = true;
	counter = 0;
	inputString = ""
	isOperator = false;
}