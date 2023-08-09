

let [seconds,minutes,hours] =[0,0,0];
let display =document.getElementById("displayTime")
let timer = null;
document.getElementById("btn").addEventListener("click",()=>{
	if(timer!== null){
		clearInterval(timer);
	}
	timer=setInterval(displayTime,500);
})


function displayTime(){
	seconds++;
	if(seconds==60){
		seconds=0;
		minutes++;
		if(minutes== 60){
			minutes =0;
			hours++;
		}
	}

let hr = hours<10 ? "0"+hours : hours;
let  m  = minutes<10 ? "0"+minutes : minutes;
let sec = seconds<10 ? "0"+seconds : seconds;
	
display.innerHTML = hr + ":" + m + ":" + sec;
}
document.getElementById("btn1").addEventListener("click",watchstop)

function watchstop(){
	clearInterval(timer)
}

document.getElementById("btn2").addEventListener("click",watchreset)
function watchreset(){
	clearInterval(timer);
	[seconds,minutes,hours] =[0,0,0];
	display.innerHTML = "00:00:00";
}
