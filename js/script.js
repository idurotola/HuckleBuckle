$( document ).ready(function() {

	var systemGuess = Math.floor(Math.random() *100);
	var newInput=0;
	var oldGuess=0;
	var count=0;
	var progressValue=0;


	/*$("#one").click(function){location.reload()};*/

	var toHtml=function(strPass) {
			$(".userStatus").text(strPass);
	}

	//this is for the progress bar to change

	function setProgress(progress)
	{          
    var progressBarWidth =progress*$(".progBar").width()/ 100; 
    $(".progressbar").animate({width:progressBarWidth},500).html(progress + "% ");
	}






	$(".navBtn").click(function(event){

		event.preventDefault();
		//this is to get the input from the user
		var btnVal = $(this).attr('rel');

			if(btnVal == "newGame") {}

			else if (btnVal == "submit") {
				//get the entered value here
				var input = $(".userInput").val();

				//check for invalid inputs to the system

				if (isNaN(input) || input > 100 || input < 0) {
				toHtml("Not a valid input");
				}
				else {
				 newInput = parseInt(input);
				/*alert(newInput);
				alert("this is system guess " + systemGuess);*/
				checkGuess();
				}


			}
			
	});

	//this is where the game is used
	checkGuess = function() {


		var newValue = newInput;
		var guessPercent = Math.ceil(newValue);
		 /*(inputVal/systemGuess) * 100;*/

			if(guessPercent == systemGuess) {
				alert ("you Win");
				setProgress(100);
				toHtml("You Win !!!");


				
			}

			else /*if (guessPercent !== systemGuess)*/
			{
					var compareVal1 = Math.abs(systemGuess - guessPercent);
					var compareVal2 = Math.abs(systemGuess - oldGuess);
					progressValue = 100 - (Math.floor((( compareVal2 / (compareVal1 + compareVal2)) * 100 )));

				//this is executed if user is wrong 

				if(compareVal1 > compareVal2)
					{
						toHtml("getting Colder");
					/* setProgress(progressValue);*/
					}
				else if(compareVal1  < compareVal2)
					{
					 
					 if(count==0){toHtml("Warming Up");}else{toHtml("getting Hotter");}
					
					}

					//keep the uses guess for the next one

					oldGuess=guessPercent;
					//calculates for the progress bar
					var deduce = Math.abs(systemGuess - oldGuess);
					var pBar = Math.abs(100 - deduce);
					setProgress(pBar);
			}


 	}


});
