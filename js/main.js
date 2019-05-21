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
	let svgGraphic = document.querySelector("#badgeSVG"),
			mainHeadline = document.querySelector(".main-headline"),
			mainSVG = document.querySelector(".svg-raster"),
			swapTextButton = document.querySelector(".switch-type");



	//functions are reusable pieces of code - put these between the variables and the event handling
	//that you can run any time.
	//FUNCTIONS:
	function logMyId(){
		console.log(this.id);

		this.style.opacity = 0.5;
	}

	function swapText() {
		mainHeadline.textContent = "Now you're something else!";
		mainHeadLine.classList.toggle("selected");

		subHead.textContent = "yadayadayada";
		subHead.classList.toggle("selected");
	}



//events always go down here
	svgGraphic.addEventListener("click", logMyId);
	swapTextButton.addEventListener("click", swapText)




})();
