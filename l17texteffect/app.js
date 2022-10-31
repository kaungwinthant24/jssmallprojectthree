const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];

// console.log(languages[1]); // give index take value
// console.log(colors[1]);

// console.log(languages.indexOf('Reactjs')); // give value take index
// console.log(languages.indexOf('Vuejs'));
// console.log(colors[languages.indexOf('Reactjs')]);
// console.log(colors[languages.indexOf('Vuejs')]);

const gettxtani = document.querySelector('.txtani');

// -----------

// yield 1 to 3
function* generator(){
	var idx = 0;

	while(true){				// can't use if because of looping
		yield idx++;
		if(idx > 3){
			idx = 0;
		}
	}
}

// const testnumber = generator();
// console.log(testnumber.next().value);	// 0
// console.log(testnumber.next().value);	// 1
// console.log(testnumber.next().value);	// 2
// console.log(testnumber.next().value);	// 3
// console.log(testnumber.next().value);	// 0

// console.log(languages[testnumber.next().value]);	// Nodejs
// console.log(languages[testnumber.next().value]);	// Reactjs
// console.log(languages[testnumber.next().value]);	// Vuejs
// console.log(languages[testnumber.next().value]);	// Laravel
// console.log(languages[testnumber.next().value]);	// Nodejs

// -----------

function showwords(word){
	// console.log(word);

	// console.log(word[0]);
	// console.log(word[1]);

	gettxtani.innerHTML = '';
	gettxtani.classList.add(colors[languages.indexOf(word)]);
	// gettxtani.innerHTML = word[0];
	// gettxtani.innerHTML += word[1];
	// gettxtani.innerHTML += word[2];

	let x = 0;

	let showinterval = setInterval(function(){

		if(x >= word.length){						// 6 > 6 => false so clear interval
			clearInterval(showinterval);
			deletewords();
		}else{
			gettxtani.innerHTML += word[x];
			x++;
		}

	},
	500)
}
// -----------
function deletewords(){
	let getword = gettxtani.innerHTML;
	// console.log(getword);

	let getlastidx = getword.length - 1;
	// console.log(getlastidx);

	let delintval = setInterval(function(){
		if(getlastidx >= 0){
			gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length-1);
			getlastidx--;
		}else{
			gettxtani.classList.remove(colors[languages.indexOf(getword)]);
			showwords(languages[gen.next().value]);
			clearInterval(delintval);
		}
	},500);
}
// -----------
let gen = generator();
showwords(languages[gen.next().value]);


// ---------------------------------------------------------------------
// Js oop
// Generator Function

// function* genfun(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }
// const getgen = genfun();
// console.log(getgen); // Object nae ya ml
// console.log(getgen.next()); // Object nae ya ml => {value: 1, done: false}

// console.log(getgen.next().value); // 1
// console.log(getgen.next().value); // 2
// console.log(getgen.next().value); // 3
// console.log(getgen.next().value); // Undefined

// console.log(getgen.next()); // {value: 1, done: false}
// console.log(getgen.next().value); // 2
// console.log(getgen.next().value); // 3
// console.log(getgen.next().value); // Undefined



// ----------------

// function abc(){
// 	return 1;
	// return 2;
	// return 3;
// }
// const getabc = abc();
// console.log(getabc);

// ----------------

// *note
// yield = keyword  (htoke pay tae kg) (htat htat khr khr ya tl ) generator function nae twel use
// return = d a phay ya yin dr pay ml (one time pl)
// next().value => yeild twy ko call tr 




// ----------------
	let gettextlights = document.querySelectorAll('.text-light');
	// console.log(gettextlights);

	gettextlights.forEach(function(gettextlight){
	// console.log(gettextlight);

	let arrtexts = gettextlight.textContent.split('');
	// console.log(arrtexts);

	gettextlight.innerText = '';
	arrtexts.forEach(function(arrtext,idx){
		// console.log(arrtext);
		let newem = document.createElement('em');
		newem.textContent = arrtext;
		// console.log(newem);
		newem.style.animationDelay = `${idx * 0.05}s`;

		gettextlight.append(newem);
	});

	
});