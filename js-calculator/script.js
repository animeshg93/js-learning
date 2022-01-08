var operator = ""
var counter = 0;
var inputNumberLength = 4;
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
		document.getElementById("inputScreen").value += button.innerHTML;
		counter++;
	}

}

function operatorInput(button){
	// don't want the user to input multiple operators
	if(!isOperator) {
		operator = button.innerHTML;
		counter = 0;
		document.getElementById("inputScreen").value += operator
		isOperator = true;
	}
}

function calculate(){
	var array = document.getElementById("inputScreen").value.split(operator);
	first = parseInt(array[0]);
	second = parseInt(array[1]);
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

		//this creates issue
		counter = first.length	
	} 
	else counter--;
	document.getElementById("inputScreen").value = currentInput.substring(0,currentInput.length-1);
}

function resetVariables(){
	isCalculated = true;
	counter = 0;
	isOperator = false;
}