// your code here!
$(document).ready(function(){

	// Take sumbitted words
	$('.js-submittedText').submit(function(e){
		e.preventDefault();
		var arrText = $('#user-text').val().toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
		console.log(arrText);
		//give number of words
		var numWords = arrText.length;
		console.log(numWords);
		//remove hidden class
		$('.text-report').removeClass('hidden');

		//add number of words
		$('.js-wordCount').text("Word Count: "+numWords);

		//compare strings 
		var nonRepeats=[];
		for(var i=0; i< arrText.length; i++){
			if( arrText[i]!= arrText[i+1]){
				nonRepeats.push(arrText[i]);
			}
		}
      	console.log(nonRepeats);
		var nonRepeatsCount = nonRepeats.length;
		console.log(nonRepeatsCount);
		// add unique number of words
		$('.js-uniqueCount').text("Number of Unique Words: "+ nonRepeatsCount);

		//find each string length

		// get total number of letters, divide by total number of words

		
		var strLength = 0;

		for(var m=0; m< arrText.length; m++){
			strLength += arrText[m].length;
		}

		var avgLength = strLength/arrText.length;
		console.log(avgLength);
		$('.js-wordLength').text("Average Length of Words: "+ avgLength);

	

	});
});