var flag = false

function start(){
	flag = false
	var timer = setInterval(function(){
		var num = +document.getElementById("sec").innerHTML;
		num = num+1;
		if(num < 10){
			document.getElementById("sec").innerHTML = "0"+num;
		}
		else{
			if(num < 60){
				document.getElementById("sec").innerHTML = num;
			}
			else{
				document.getElementById("sec").innerHTML = "00";
				var min = +document.getElementById("min").innerHTML;
				min = min+1;
				if(min < 10){
					document.getElementById("min").innerHTML = "0"+min;
				}
				else{
					document.getElementById("min").innerHTML = min;
				}
			}
		}
		if(flag) clearInterval(timer);
	},10);
}

function stop(){
	flag = true;
}

function reset(){
	document.getElementById("sec").innerHTML = "00";
	document.getElementById("min").innerHTML = "00";
}