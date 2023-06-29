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
