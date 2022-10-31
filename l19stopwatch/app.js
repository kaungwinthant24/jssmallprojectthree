// const getdisplay = document.querySelector('.display');
const getdisplay = document.querySelectorAll('.display');
const getstartbtn = document.querySelector('.start');
const getpausebtn = document.querySelector('.pause');
const getresetbtn = document.querySelector('.reset');

const getdlpsec = document.getElementById('dlpsecond');
const getdlpmlsec = document.getElementById('dlpmillisec');
const getmodebtn = document.querySelector('.mode-btn');

// console.log(getresetbtn);

// var hours = 0,
// 	minutes = 0,
// 	seconds = 0,
// 	milliseconds = 0;

var [hours,minutes,seconds,milliseconds] = [0,0,0,0];

// console.log(milliseconds);

var setinvdisplay; 


// getstartbtn.addEventListener('click',starttime);
// getpausebtn.addEventListener('click',pausetime);
// getresetbtn.addEventListener('click',resettime);

// function starttime(){
// 	// console.log('hey I am Start Time');
// 	clearInterval(setinvdisplay);	
// 	setinvdisplay = setInterval(showdisplay,10);
// }

// function pausetime(){
// 	// console.log('hey I am Pause Time');

// 	clearInterval(setinvdisplay);
// }

// function resettime(){
// 	// console.log('hey I am Reset Time');
// 	clearInterval(setinvdisplay);
// 	[hours,minutes,seconds,milliseconds] = [0,0,0,0];
// 	getdisplay.innerText = "00 : 00 : 00 : 000";
// }

// function showdisplay(){
// 	// console.log('hay hay hay hee hee');

// 	milliseconds += 10;
// 	if(milliseconds === 1000){
// 		milliseconds = 0;
// 		seconds++;

// 		if(seconds === 60){
// 			seconds = 0;
// 			minutes++;

// 			if(minutes === 60){
// 				minutes = 0;
// 				hours++;
// 			}
// 		}
// 	}
	

// 	// console.log(milliseconds);
// 	// console.log(seconds);
// 	// console.log(minutes);
// 	// console.log(hours);

// 	let h = hours < 10 ? "0"+hours : hours;
// 	let m = hours < 10 ? "0"+minutes : minutes;
// 	let s = seconds < 10 ? "0"+seconds : seconds;
// 	let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+milliseconds : milliseconds;

// 	getdisplay.innerHTML = `${h} : ${m} : ${s} : ${ms} `
// }


var idx = 0;
getdisplay[idx].style.display = 'block';

getmodebtn.onclick = function(){

	reloadagain();


	// console.log("hi i am mode-btn");
	getdisplay[idx].style.display = 'none';
	idx++;
	if(idx > 1){
		idx = 0;
	}
	getmodebtn.innerHTML = `Mode ${idx+1}`
	getdisplay[idx].style.display = 'block';
	// console.log(idx);
}

getstartbtn.onclick = function(){
	// console.log("hey I am start");
	clearInterval(setinvdisplay);
	setinvdisplay = setInterval(showdisplay,10);
}

getpausebtn.onclick = function(){
	// console.log("hey I am pause");
	clearInterval(setinvdisplay);
}

getresetbtn.onclick = function(){
	// console.log("hey I am reset");
	
	// clearInterval(setinvdisplay);
	// milliseconds = 0;
	// seconds = 0;
	// getdlpmlsec.innerHTML = '00'
	// getdlpsec.innerHTML = '00';

	// if(idx === 0){
	// 	// mode 1
	// 	clearInterval(setinvdisplay);
	// 	[hours,minutes,seconds,milliseconds] = [0,0,0,0];
	// 	getdisplay[idx].innerText = "00 : 00 : 00 : 000";
	// }else{
	// 	// mode 2
	// 	clearInterval(setinvdisplay);
	// 	milliseconds = 0;
	// 	seconds = 0;
	// 	getdlpmlsec.innerHTML = '00'
	// 	getdlpsec.innerHTML = '00';
	// }

	reloadagain();
}

function reloadagain(){
	if(idx === 0){
		// mode 1
		clearInterval(setinvdisplay);
		[hours,minutes,seconds,milliseconds] = [0,0,0,0];
		getdisplay[idx].innerText = "00 : 00 : 00 : 000";
	}else{
		// mode 2
		clearInterval(setinvdisplay);
		milliseconds = 0;
		seconds = 0;
		getdlpmlsec.innerHTML = '00'
		getdlpsec.innerHTML = '00';
	}
}

function showdisplay(){
	// console.log("hey I am working");

	if(idx === 0){
		milliseconds += 10;
		if(milliseconds === 1000){
			milliseconds = 0;
			seconds++;

			if(seconds === 60){
				seconds = 0;
				minutes++;

				if(minutes === 60){
					minutes = 0;
					hours++;
				}
			}
		}
		

		// console.log(milliseconds);
		// console.log(seconds);
		// console.log(minutes);
		// console.log(hours);

		let h = hours < 10 ? "0"+hours : hours;
		let m = hours < 10 ? "0"+minutes : minutes;
		let s = seconds < 10 ? "0"+seconds : seconds;
		let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+milliseconds : milliseconds;

		getdisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms} `


	}else{

		milliseconds++;
		// console.log(milliseconds);
		if(milliseconds <= 9){
			getdlpmlsec.innerHTML = '0'+milliseconds;
		}
		if(milliseconds > 9){
			getdlpmlsec.innerHTML = milliseconds;
		}
		if(milliseconds > 99){
			milliseconds = 0;
			seconds++;
			getdlpmlsec.innerHTML = '0'+0;		
			getdlpsec.innerHTML = '0'+seconds;
		}
		if(seconds > 9){
			getdlpsec.innerHTML = seconds;
		}


	}


	// milliseconds++;
	// // console.log(milliseconds);
	// if(milliseconds <= 9){
	// 	getdlpmlsec.innerHTML = '0'+milliseconds;
	// }
	// if(milliseconds > 9){
	// 	getdlpmlsec.innerHTML = milliseconds;
	// }
	// if(milliseconds > 99){
	// 	milliseconds = 0;
	// 	seconds++;
	// 	getdlpmlsec.innerHTML = '0'+0;		
	// 	getdlpsec.innerHTML = '0'+seconds;
	// }
	// if(seconds > 9){
	// 	getdlpsec.innerHTML = seconds;
	// }
}

// getstartbtn.addEventListener('click',starttime);
// getpausebtn.addEventListener('click',pausetime);
// getresetbtn.addEventListener('click',resettime);