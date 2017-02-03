//create a new empty array
//var GuessedLetters = new Array();

// this function is run whenever the user presses a key
	//document.onkeyup = function(event) {

// determines which key was pressed
	//var userGuess = event.key;
	//GuessedLetters.push(event.key)

//wait for the player to press a key

// need to use onkeyup and a function when the player releases a key
	document.onkeyup = function(event) {
		//the rest of this code below, belongs inside that function
		var GuessedLetters = new Array();
//check if the player has already pressed that key
//see if our container of already pressed keys contains the key being pressed now


//this function tells you if the array a contains object obj
//call like this: if (contains(GuessedLetters, event.key)) { dostuff() }
function contains(guessedLetters, event.key) {
    for (var i = 0; i <guessedLetters.length; i++) {
        if (guessedLetters[i] === event.key)
        	{
            return true;
        }
    }
    return false;
}

//if the player has already pressed that key, do nothing
 //no code needed here

//because the next line handles the opposite case
//if the player has pressed a new key, store it 
if (contains(GuessedLetters, event.key) === false)
	{
	 GuessedLetters.push(event.key);
	 //if our array doesnt have event.key in it, then add it. 
	},

//check if the new letter exists in our target phrase 
//our target phrase is a string, so we need to google for 'how to find a letter in a string'

//if it does, then we need to display it on screen in the right spot
//if it doesnt, then we need to add to the 'mistakes' and draw another line on our hangman
//because we want both does and doesnt to do different things, you'll  need if-else

//check if the player has guessed all the letters correctly 
//store the number of correct guesses someplace
//check if the number of correct guesses is equal to the length of our target phrase
//if so, then display win state

//check if the player has made too many mistakes 
//if so, then display lose state

// go back to the top
}
