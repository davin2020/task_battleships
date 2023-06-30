

let taskArray = [
	"feed dog",
	"dishes",
	"finish report",
	"laundry",
	"commit code"
]

let itemClicked = document.getElementById("getTask");
newRandomQuote.addEventListener("click", function() {
	console.log('CLICKED get Task');
  	// chooseRandomItem(randomQuotes);
  	printTasks();
  	// any benefit to adding all the code here?
});

function printTasks() {
	shuffle(taskArray);
	console.log("everyday im shuffling...")
	let str =""
	for (let index = 0; index < taskArray.length; index++) {
			console.log("..printTask")
		    console.log(taskArray[index]);
		    let nameId = 'getTask' + index;

		    // result += `<li>${item}</li>`;
		    str += `<button class="button_ship" name="${nameId}" id="${nameId}" >blank</button>` ; 
		    // str += '<button name="'nameId'" id="getTask' + index + '" >' + taskArray[index] + '</button>' ; 
		    
		    // str += '<button name="getTask' + index + '" id="getTask' + index + '" >' + taskArray[index] + '</button>' ; 
		    // str += taskArray[index]
		    // str += '<li>'+ slide + '</li>';
		    // <button name="getTask" id="getTask" >taskArray[index]</button> 
	}
	// updateElementWithContent("userList", taskArray[index])
	updateElementWithContent("allTasks", str)
	//aboev sets value of string, only then can i add listeners!
	addListeners();
}

// i dont want to hide the buttons, iwant to hide the words 
function addListeners() {
	for (let index = 0; index < taskArray.length; index++) {
		let nameId = 'getTask' + index;
		let item = document.getElementById(nameId);
		// console.log(item)
		// print(item) - this turns on browsers printing feature
		item.addEventListener("click", function() {
			console.log('added listener - task  name id ');
			item.textContent = taskArray[index];
			// item.hidden = false;
			item.style.backgroundColor ="green"
			//make things visible
		  	// printTasks();
		});
	}
}

	
// stole shuffling array from here - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976
// why doenst JS have built in shuffle function?
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}





// ======



// Customise this by adding in your own quotes
let randomQuotes = [
	"DeLorean Ipsum",
	"Roads? Where we’re going, we don’t need roads",
	"Great Scott!",
	"Wait a minute, Doc. Are you telling me you built a time machine...out of a DeLorean?",
	"1.21 Gigawatts!?!",
	"88 miles per hour!",
	"If you put your mind to it, you can accomplish anything.",
	"Doc, you’re my only hope.",
	"I’m from the future."
	];

// store images locally for quicker refresh
// Customise this by adding in your own royalty free images
let randomImages = [
	"images/jason-leung-pSLIG2E_gaw-unsplash.jpg",
	"images/sebastiano-piazzi-dSYk9mTxFzU-unsplash.jpg",
	"images/delorean-rental-jLWR4eYzXbw-unsplash.jpg",
	"images/sebastiano-piazzi-Wbekvae_0P4-unsplash.jpg"
	];

function chooseRandomItem(arrayItems) {
	let chosenItem = arrayItems[Math.floor(Math.random()*arrayItems.length)];
	// console.log(chosenItem);
	return chosenItem;
}

let newRandomQuote = document.getElementById("getQuote");
newRandomQuote.addEventListener("click", function() {
	// console.log('CLICKED');
  	// chooseRandomItem(randomQuotes);
  	getRandomQuote();
  	// any benefit to adding all the code here?
});

//this is the main function called by index page
function getRandomQuote() {
	// console.log('called main function ie getRandomQuote');
	let selectedQuote = chooseRandomItem(randomQuotes);
	updateElementWithContent("userQuote", selectedQuote);
	let selectedImage = chooseRandomItem(randomImages);
	// console.log('selectedImage: ' + selectedImage);
	updateElementWithImage("userImage", selectedImage);
}

function updateElementWithContent(element, content) {
	// console.log('displayUserItem element: ' + element);
	// console.log('displayUserItem content: ' + content);
	document.getElementById(element).innerHTML = content;
}

function updateElementWithImage(element, image) {
	// console.log('updating ' + element + ' with url: ' + image)
	document.getElementById(element).src = image;
}
