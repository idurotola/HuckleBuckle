var huckleGame = 
{
	systemGuess : 0,
	newInput:0,
	oldGuess:0,
	count:0,
	initialize : function () {
		$(".navBtn").click(huckleGame.submitClicked);
		huckleGame.systemGuess=Math.floor(Math.random() *100);
		huckleGame.oldGuess=0;
		huckleGame.count=0;
								},

	submitClicked : function(event){
		event.preventDefault();
		//this is to get the input from the user
		var btnVal = $(this).attr('rel');
			if(btnVal == "newGame") {}
			else if (btnVal == "submit") {
				var input = $(".userInput").val();
				//check for invalid inputs to the system
				if (isNaN(input) || input > 100 || input < 0 || input=="") {
						huckleGame.toHtml("Please Enter A valid Input");
						}
				else {
				 newInput = parseInt(input);
				huckleGame.checkGuess(newInput);}}
											},


	checkGuess : function(newInput) {
		var newValue = newInput;
		var guessPercent = Math.ceil(newValue);
			if(guessPercent == huckleGame.systemGuess) {
				huckleGame.progressBar(100);
				huckleGame.toHtml("You Win !!!");
				alert("You Win!!!   Play Again");
			}
			else 
			{
					var compareVal1 = Math.abs(huckleGame.systemGuess - guessPercent);
					var compareVal2 = Math.abs(huckleGame.systemGuess - huckleGame.oldGuess);
				//this is executed if user is wrong 
				if(compareVal1 > compareVal2)
					{
					huckleGame.toHtml("getting Colder");
					}
				else if(compareVal1  < compareVal2)
					{
					if(huckleGame.count==0)
						{
							huckleGame.toHtml("Warming Up");
							 huckleGame.count=1;
							}
							else
							{
								huckleGame.toHtml("getting Hotter");
							}
					}
					//keep the users guess for the next one
					huckleGame.oldGuess=guessPercent;
					//calculates for the progress bar
					var deduce = Math.abs(huckleGame.systemGuess -huckleGame.oldGuess);
					var pBar = Math.abs(100 - deduce);
					huckleGame.progressBar(pBar);
				}	
						},

	progressBar : function(progress)
				{          
			    var progressBarWidth =progress*$(".progBar").width()/ 100; 
			    $(".progressbar").animate({width:progressBarWidth},500);
				},

	toHtml:    function(strPass) {
			$(".userStatus").text(strPass);
									}
};
$(document).ready(huckleGame.initialize);