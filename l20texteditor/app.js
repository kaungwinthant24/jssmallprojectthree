var gettextarea = document.getElementById('textarea');
var getdivarea = document.getElementById('divarea');
getdivarea.contentEditable = true;
getdivarea.spellcheck = false;

var getbtns = document.querySelectorAll('.btn');
// console.log(getbtns);

getbtns.forEach(function(getbtn){
	getbtn.addEventListener('click',function(){
		// console.log('hi');
		// var getcommand = getbtn.getAttribute('data-command');
		var getcommand = getbtn.dataset['command'];
		// console.log(getcommand);

		if(getcommand === "cleartext"){
			getdivarea.innerHTML = '';
		}else if(getcommand === "createLink" || getcommand === "insertImage"){
			let geturl = prompt("Enter Your website link","https://");
			document.execCommand(getcommand,false,geturl);
		}else if(getcommand === "foreColor"){
			document.execCommand(getcommand,false,getbtn.value);
		}else if(getcommand === "paste"){
			navigator.clipboard.readText().then(function(cliptext){
				getdivarea.innerHTML += cliptext;
			});
		}else{
			document.execCommand(getcommand,false,null);
		}
	})
});

// function boldfun(){
// 	gettextarea.style.fontWeight = 'bold';
// }

// function italicfun(){
// 	gettextarea.style.fontStyle = 'italic';
// }

// function underlinefun(){
// 	gettextarea.style.textDecoration = 'underline';
// }

// function lalgfun(){
// 	gettextarea.style.textAlign = 'left';
// }

// function calgfun(){
// 	gettextarea.style.textAlign = 'center';
// }

// function ralgfun(){
// 	gettextarea.style.textAlign = 'right';
	
// }

	// function upcasefun(){
	// 	gettextarea.style.textTransform = 'uppercase';
	// }

	// function lwcasefun(){
	// 	gettextarea.style.textTransform = 'lowercase';
	// }

	// function capcasefun(){
	// 	gettextarea.style.textTransform = 'capitalize';
	// }

// function clearfun(){
// 	gettextarea.style.fontWeight = 'normal';
// 	gettextarea.style.fontStyle = 'normal';
// 	gettextarea.style.textDecoration = 'none';
// 	gettextarea.style.textAlign = 'left';
// 	gettextarea.value = '';
	
// }

						//	true or false 
// excCommand(aCommandName,aShowDefaultUI,aValueArgument);