var operator = ""
var counter = 0;
var inputString = ""
var inputNumberLength = 6;
var isOperator = false;
var isCalculated = false;
var first;
var second;

function numberInput(button){
	if(isCalculated){
		document.getElementById("inputScreen").value = "";
		isCalculated = false;
	} 
	if(counter < inputNumberLength){
		inputString += button.innerHTML
		document.getElementById("inputScreen").value += button.innerHTML;
		counter++;
	}

}

function operatorInput(button){
	// don't want the user to input multiple operators after a single number has been input
	if(!isOperator) {
		operator = button.innerHTML;
		first = parseInt(inputString);
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

function resetVariables(){
	isCalculated = true;
	counter = 0;
	inputString = ""
	isOperator = false;
}