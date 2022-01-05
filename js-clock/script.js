function clock(){
	var date = new Date()
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	

	setInterval(function(){
		sec = sec+1;
		if(sec >= 60){
			min++;
			sec = 0;
		}
		if(min >= 60){
			min = 0;
			hour++;
		}
		if(hour >=12){
			document.getElementById("day").innerHTML = "PM"
		}
		else{
			document.getElementById("day").innerHTML = "AM"
		}

		if(hour < 10)document.getElementById("hour").innerHTML = "0"+hour
			else document.getElementById("hour").innerHTML = hour
		if(min < 10) document.getElementById("min").innerHTML = "0"+min
			else document.getElementById("min").innerHTML = min
		if(sec < 10) document.getElementById("sec").innerHTML = "0"+sec
			else document.getElementById("sec").innerHTML = sec
	}, 1000);
}

