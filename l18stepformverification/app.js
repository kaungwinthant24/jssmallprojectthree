var getpages = document.getElementsByClassName('page');
// console.log(getpages); // HTML Collection
var getdots = document.getElementsByClassName('dot');
var  getform = document.getElementById('form');

var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');

const getrstcontainer = document.getElementById('result-container');
var objkeys = ["email","password","firstname","lastname","dob","phone","address"];
var datas = []

// ----------------
var curidx = 0;

showpage(curidx);

function showpage(num){
	// console.log(num);
	getpages[num].style.display = 'block';

	num === 0 ? getprevbtn.style.display ='none' : getprevbtn.style.display='block';  // block because of d-flex

	num === (getpages.length-1) ? getnextbtn.textContent='Submit' : getnextbtn.innerText="Next";

	dotindicator(num);
}


function dotindicator(num){
	// console.log(num);
	for(var x=0; x<getdots.length; x++){
		getdots[x].classList.remove('active');
	}
	getdots[num].className += ' active';
}


function gonow(num){

	// // console.log('num' + num);	
	// // console.log('curidx' + curidx);
	// getpages[curidx].style.display = 'none';
	// curidx = curidx + num;
	// // console.log(curidx);
	// if(curidx >= getpages.length){
	// 	getform.submit();
	// }
	// showpage(curidx);

	// ---------or---------

	// formvalidation();
	// console.log(formvalidation());
	// if(formvalidation()){
	// 	getpages[curidx].style.display = 'none';
	// 	curidx = curidx + num;
	// 	// console.log(curidx);
	// 	if(curidx >= getpages.length){
	// 		getform.submit();
	// 	}
	// 	showpage(curidx);
	// }

	// ---------or---------


	// if(num === 1 && formvalidation()){
	// 	// console.log("I am working");

	// 	// console.log(curidx); 
	// 	getpages[curidx].style.display = 'none';
	// 	curidx = curidx + num;
	// 	// console.log(curidx); 

	// 	if(curidx >= getpages.length){
	// 		getform.submit();
	// 	}
	// 	showpage(curidx);
	// }

	// ---------or---------

	// if(num === 1 && !formvalidation()){
	// 	return false;
	// }

	if(num === 1 && !formvalidation()) return false;

	getpages[curidx].style.display = 'none';
	curidx = curidx + num;
	if(curidx >= getpages.length){
		// getform.submit();

		getform.style.display = 'none';
		getrstcontainer.style.display = 'block';

		result(datas);

		return false;
	}
	showpage(curidx);
}

function* genfun(){
	var index = 0;
	while(index < objkeys.length){
		yield index++;
	}
}
// console.log(genfun().next().value);   // => genfun works one invoke one yield and other invoke other yield
let gen = genfun();
// console.log(gen.next().value);	 // 0
// console.log(gen.next().value);	 // 1
// console.log(gen.next().value);	 // 2
// console.log(gen.next().value);	 // 3
// console.log(gen.next().value);	 // 4
// console.log(gen.next().value);	 // 5
// console.log(gen.next().value);	 // 6
// console.log(gen.next().value);	 // undefined
// console.log(gen.next().value);	 // undefined
	


function formvalidation(){

	var valid = true;
	var getcurrinput = getpages[curidx].getElementsByTagName('input');
	// console.log(getcurrinput);

	for(var x=0; x<getcurrinput.length; x++){
		if(getcurrinput[x].value === ''){
			getcurrinput[x].classList.add('invalid');
			valid = false;
		}else{
			// console.log('x value is',x);
			// console.log(objkeys[x]);
			// console.log(getcurrinput[x].value);

			// var obj = {
			// 	// objkeys[x] : getcurrinput[x].value   => Error => key position mhr [] yay loh ma ya
			// }
			// datas.push(obj);

			// Method(1)
			// //console.log('gen value is ',gen.next().value);
			// const keys = objkeys[gen.next().value];
			// const values = getcurrinput[x].value;
			// const obj = {
			// 	[keys] : values  // => object htl mhr a pyin mhr pay htr tae key ko dynamic phit say chin yin [...] htl htae pay ya ml
			// }
			// datas.push(obj);


			// Method(2)
			// const keys = gen.next().value;
			// const values = getcurrinput[x].value;
			// var obj = {};
			// obj[keys] = values;
			// datas.push(obj);

			// Method(3)
			const keys = objkeys[gen.next().value];
			const values = getcurrinput[x].value;
			datas.push({[keys]:values});

		}
	}

	if(valid){
		for(var x=0; x<getcurrinput.length; x++){
			getcurrinput[x].classList.remove('invalid');
		}
		getdots[curidx].className += ' done';
	}

	return valid;
}

function result(data){
	// console.log(data);

	getrstcontainer.innerHTML = `
						<ul>
							<li>Name : ${datas[2].firstname} ${datas[3].lastname}</li>
							<li>Email : ${datas[0].email}</li>
							<li>Date Of Birth : ${datas[4].dob}</li>
							<li>Phone Number : ${datas[5].phone}</li>
							<li>Address : ${datas[6].address}</li>								
						</ul>

						<button type="submit" class="submit-btn" onclick="submitbtn">Apply Now</button>
	`
}

function submitbtn(){
	getform.submit();
}
// ----------------