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
	let svgGraphic = document.querySelector("#badgeSVG");
			mainHeadline = document.querySelector(".main-headline");
			mainSVG = document.querySelector(".svg-raster");


	//functions are reusable pieces of code
	//that you can run any time.
	function logMyId(){
		console.log(this.id);

		this.style.opacity = 0.5;
	}

	svgGraphic.addEventListener("click", logMyId);

	mainHeadline.textContent = "Now you're something else!";
	mainSVG.textContent = "yadayadayada";

})();
