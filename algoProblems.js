// Reverse a string function 

function reverseAStirng(str){
	str = str.split('').reverse().join('');

	return str 
}

// Factorialize a Number

function factorializeNum (num){
	// This should apply to all code that is either 0 or 1
	// I used "===" because these are strictly equal values, meaning they have the same 
	// value and type
	// Factorial of Zero has to return 1 also. 
	if (num === 0 || num === 1)
		return 1
	
	// This for loop is for all numbers not 0 or 1
	// Just read throught the logic of this solution
	for (var i = num -1; i >= 1; i--){
		num = num*i;
	}
	return num
}

// There is a recusive solution to this problem.
// We just will call this factorialize
function factorialize (num){
	return num 
}

// Check for Palindromes

function palindromes (str){
	
	//str = str.toLowerCase();
  	//str = str.replace(/[^0-9a-zA-Z]/g,'');
  	// This can all be done on one line. 

  	var regex = /[^0-9a-zA-Z]/g; // var regex = /[\W_]/g; works too.
  	str = str.toLowerCase().replace(regex, '');

  	var length = str.length ;

  	for (var i = 0; i < length/2; i++){
  		if (str[i] !== str[length - 1 - i]){
  			return false;
  		}
  	}
  	
	return true;
}

function palindrome (str){

	var regEx = /[\W_]/g;
	str = str.toLowerCase().replace(regEx, '');
	var reverseStr = str.split('').reverse().join('');

	return reverseStr === str; 
}

// Reverse the Vowels of a String

function vowelReverse(str){

	// I attempting to use RegEx to solve this problem
	// The will have to use a loop the first solution that came to mind didn't work. 

	str = str.split("");
	//str = str.reverse("/^[aeiou]$/i")
	str = str.join("");

	return str 
}

// Find the Longest Word in a String

function findLongestWord(str){
	return str.length
}
