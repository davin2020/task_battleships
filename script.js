
let taskArray = [
]

function showExistingTaskList() {
	// if u DONT put quotes around the printed string  below, it wil literally print out the whole function!
	console.log("showExistingTaskList");
	taskListString = "";
	for (let index = 0; index < taskArray.length; index++) {
		let nameId = 'getTask' + index;
		// taskListString += `<li name="${nameId}" id="${nameId}" >${taskArray[index]} </li>` ; 
		taskListString += `<li>${taskArray[index]}</li>` ; 
	}
	console.log(taskListString);
	updateElementWithContent("taskList", taskListString);
}

//this wont be called as getTask doenst have ID here
let itemClicked = document.getElementById("getTask");
newRandomQuote.addEventListener("click", function() {
	console.log('CLICKED get Task');
  	printTasks();
});


function printTasks() {
	document.querySelector('#addTaskButton').disabled = true;
	let str =""
	console.log("everyday im shuffling...")
	console.log(taskArray.length);
	// 14 really gives us 15 square
	while (taskArray.length <= 14) {
		taskArray.push("[empty]");
	}
	shuffle(taskArray);
	for (let index = 0; index < taskArray.length; index++) {
			console.log("..printTask")
		    console.log(taskArray[index]);
		    let nameId = 'getTask' + index;
		    //should they say 'Blank'? could show index here, but hard to match on it to then show task text
		    str += `<button class="button_task" name="${nameId}" id="${nameId}" >?</button>` ; 
	}

	// cant update both sets as ids are unique and likely only first matching one is returned!
	// updateElementWithContent("allTasks", str)
	updateElementWithContent("allTasks2", str)
	//aboev sets value of string, only then can i add listeners!
	addListeners();
	//enable the add button again, but dont we want to stop ppl adding tasks?
	// document.querySelector('#addTaskButton').disabled = false;
}

// i dont want to hide the buttons, iwant to hide the words 
function addListeners() {
	for (let index = 0; index < taskArray.length; index++) {
		let nameId = 'getTask' + index;
		let item = document.getElementById(nameId);
		// print(item) - this turns on browsers printing feature
		item.addEventListener("click", function() {
			console.log('added listener - task  name id ');
			// on first click, show task text
			console.log("item.textContent " + item.textContent);
			if (item.textContent == "?") {
				// fyi adding content to empty-string button makes whole button  MOVE, so empty button has ? isntead
				item.textContent = taskArray[index];
				item.style.backgroundColor ="orange";
			}
			//otherwsie mark task as done using green color
			else {
				item.style.backgroundColor ="green";
			}

		});
	}
}

	
//  this is better but page keep on refreshing! adn x doesnt have value
function addNewTask() {
	console.log("addNewTask");
	let newTask = document.getElementById("newTask");
	console.log(newTask);
	let x = newTask.value;
	console.log('ADD...found new task ' + x);
	taskArray.push(x)
	showExistingTaskList();
	newTask.value = "";
	// dont  let user add more than 15 tasks, so they can all fit in grid
	if (taskArray.length >= 15) {
		// refactor - use querySelector instead of getElementById
		document.querySelector('#addTaskButton').disabled = true;
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


function updateElementWithContent(element, content) {
	document.getElementById(element).innerHTML = content;
}

