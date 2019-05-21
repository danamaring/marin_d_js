(() => {
	//sub
	console.log('fired!');


	// select elements with JavaScript
	//
	//
	// setting up a variable using the let keyword,
	// and using a CSS selector to find the element we want to use.
	//
	// let stores the reference to element as a variable (in memory)
	//VARIABLES:
	let mainHeadline = document.querySelector(".main-headline"),
			mainSVG = document.querySelector(".svg-raster"),
			swapTextButton = document.querySelector(".switch-type"),
			allImages = document.querySelectorAll("#image-container img"),
			objectButton = document.querySelector(".container button");


	//functions are reusable pieces of code - put these between the variables and the event handling
	//that you can run any time.
	//FUNCTIONS:
	function logMyId(){
		console.log(this.id);
		// toggle a class here with classList

		this.style.opacity = 0.5;
	}

	function swapText() {
		mainHeadline.textContent = "Now you're something else!";
		mainHeadLine.classList.toggle("selected");

		subHead.textContent = "yadayadayada";
		subHead.classList.toggle("selected");
	}

	function logTheSVG(){
		console.log(this.previousElementSibling.id);
	}




//events always go down here
	swapTextButton.addEventListener("click", swapText)

//select and loop through a bunch of items at once -> one to many relationship
	allImages.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	// the button beside the svg objectButton
	objectButton.addEventListener("click", logTheSVG)
})();
