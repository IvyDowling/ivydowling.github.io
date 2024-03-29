function pushPoem(str){
    $("#myShellId").html(str)
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}
  
function selectFromPossbileMatches(arr){
    var sorted = arr.sort((function cmprWeights(a,b){return a[2] - b[2]}));
    var total = 0;
    for (var a in sorted){
    	total += a[2];
    }
    var chosenWeight = Math.round(Math.random() * total);
    for (var b in sorted){
    	chosenWeight -= b[2];
    	if (chosenWeight <= 0){
    		return b;
    	}
    }
    return sorted[sorted.length - 1];
}

function getAnUppercaseIndex(arr){
    var startingPosition = -1;
    for (i = 0; i < arr.length; i++){
    	if (arr[i][0].substring(0,1).match(/[A-Z]/g)){
              startingPosition = i;
              i = arr.length + 1;
        }
    }
    return startingPosition;
}
  
function fact(num){
  if (num > 1){
  	return fact(num - 1) + num;
  }
  return num;
 }

function buildAPoem() {
    var me = "";
    var GRAM_LENGTH = 4;
    $("#corpus").each( function(i) {
    	me += this.innerHTML;
    });
    var tokens = me.replace( /\n/g, "" ).replace( /[.,?!]/g, " $& " ).replace( /(\s)+/g, " ").split(" ");
    for (i = 0; i < tokens.length; i++){
        tokens[i] = tokens[i].trim()
    }
    // grams
    var grams = [];
    for (i = 0; i < (tokens.length - (GRAM_LENGTH - 1)); i++) {
        var temp = [];
        for (j = 0; j < GRAM_LENGTH; j++){
            temp.push(tokens[i + j])
        }
        grams.push(temp);
    }
    grams = shuffle(grams);
    // CONSTRUCT //
    // MARKOV!!! //
    // we're going to start with grams where the first index is uppercase
    var startingPosition = 0 //getAnUppercaseIndex(grams);
    var poem = grams[startingPosition];
    // pull out added grams
    grams.splice(startingPosition, 1);
    //console.log("starting with " + poem);
    var building = 1;
    while (building > 0){
        building++;
        // the way this works, we only need to
        // match the (GRAM_LENGTH-1) strings,
        // then we take the last one and add it to our poem
        var prefix = poem.slice((GRAM_LENGTH - 1) * -1)
        // FUN CASE!
        // if we have 2 line breaks back to back at the end of our 'prefix'
        // lets start with a brand new gram
        if (prefix[prefix.length - 2] == prefix[prefix.length - 1] && prefix[prefix.length - 2] === "<br>"){
            var randIndex = getAnUppercaseIndex(grams)
            poem = poem.concat(grams[randIndex])
            rep = grams.splice(randIndex,1)
        } else {
		// posNext array contains
		// 	0: string
		//	1: index in array (for removal)
		//	2: % match
		var posNext = [];
	        for (i = 0; i < grams.length; i++) {
        	        var match = 0;
                	// here is our closeness measurement
			// I'm using a weighted sum, where the closer the
			// matched word is to the end of the string the more
			// significant the match is. This is represented
			// by the +(index + 1) for each matched word
			// max match is factorial(GRAM_LENGTH)
                	for (j = 0; j < GRAM_LENGTH; j++){
                    		if (grams[i][j] == prefix[j]){
                        		match += (j + 1);
                    		}
                	}
			// let's get crafty. I'm having problems over line breaks,
			// so lets extend our memory if we're enjambing.
			// This is because of scenrios like:
			// 	(',', '<br>') on trigrams.
			if (prefix[prefix.length - 1] == '<br>'){
				if (match == fact(GRAM_LENGTH - 1)){
					var next = grams[i][GRAM_LENGTH - 1];
					posNext.push([next,i,match]);
				}
			} else {
				if (match > 3) {
					var next = grams[i][GRAM_LENGTH - 1];
					posNext.push([next,i,match]);
				}
			}
            	}
            	// if we get through the corpus and didn't find a match then we've
            	// probably consumed the whole text. It would be good to back-up and
            	// try again here, but for now let's just end the poem...
            	if (posNext.length == 0){
                	building = 0;
            	} else {
			// pick one from possible next
			var selected = selectFromPossbileMatches(posNext);
			poem.push(selected[0]);
			// remove the pick
			rep = grams.splice(selected[1],1);
			//console.log("Selected: " + selected[0]);
			if (Math.random() > 0.5 && (selected[0] === "." || selected[0] === "?" || selected[0] === "!")){
				building = 0;
			}
		}
        }
    }
    // human readable
    var outputPoem = poem[0];
    for (i = 1; i < poem.length; i++){
        // no space before punctuation
        if(poem[i].match(/[.,?!]/g)){
            outputPoem += poem[i];
        } else {
            outputPoem += " " + poem[i];
        }
    }
    return outputPoem;
}

function addCode() {
    $("#corpus").append($("#myShellId").text())
}

function peekCorp() {
    $("#corpus").toggle()
}

function manualAdd() {
    $("#corpus").append($("#inputAreaId").val() + " ")
}

function clearCorp() {
    $("#corpus").text("")
}

document.addEventListener("DOMContentLoaded", function() {    
    $("#meInputId").on("click", function(){
        pushPoem(buildAPoem());
    });
    $("#addcorpId").on("click", function(){
        addCode();
    });
    $("#peekcorpId").on("click", function(){
        peekCorp();
    });
    $("#submitInputId").on("click", function(){
        manualAdd();
    });
    $("#clearcorpId").on("click", function(){
        clearCorp();
    });
});
