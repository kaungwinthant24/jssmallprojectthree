var getimgs = document.querySelectorAll('.img');
// console.log(getimgs); // NodeLIst

var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');
// console.log(getviews); // HTML Collection
// console.log(getviews[0]);

var getprevbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');
var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');
var getnoactive = document.getElementsByClassName('noactive');
// console.log(getnoactive); // HTML Collection

var curidx = 1;

for(var i=0; i<getimgs.length; i++){
	// getimgs[i].addEventListener('click',showmodal);
	getimgs[i].addEventListener('click',function(e){
		showmodal();
		// console.log(e.target.alt);
		// console.log(this.alt);
											// remove space
		const findids = this.alt.split('').filter(rmspace=>rmspace.trim() !== '');
		// console.log(findids);
		// console.log(findids[findids.length-1]);
		// console.log(typeof findids[findids.length-1]); // String
		curidx = +findids[findids.length-1];  // String to Number
		slideshow(curidx);

	});
}

function showmodal(){
	getmodal.style.display = "block";
}

// getbtnclose.addEventListener('click',function(){
// 	getmodal.style.display = "none";
// });

getbtnclose.onclick = function(){
	getmodal.style.display = "none";
}

document.addEventListener('click',function(e){
	// console.log(e.target);
	if(e.target === getmodal){
		getmodal.style.display = "none";
	}
});

function currentview(num){
	slideshow(num);

}

getnextbtn.addEventListener('click',function(){
	// console.log("I am next btn.");
	slideshow(curidx += 1);
});

getprevbtn.addEventListener('click',function(){
	// console.log("I am prev btn.");
	slideshow(curidx -= 1);
});

// slideshow(curidx);

function slideshow(num){
	// console.log(num)
	var x;
	for(x=0; x<getviews.length; x++){
		getviews[x].style.display = 'none';
		getnoactive[x].className  = "noactive";

	}

	if(num > getviews.length){
		num = 1;
		curidx = 1;
	}

	if(num < 1){
		num = getviews.length;
		curidx = getviews.length;
	}
	// console.log("This is current idx = " , curidx)
	// console.log("This is num = " , num);

	getcounter.textContent = `${num} / ${getviews.length}`;

	getviews[num-1].style.display = "block";
	getnoactive[num-1].className += " active";

	getcaption.innerText = getnoactive[num-1].alt;



}
