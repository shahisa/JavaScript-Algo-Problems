// Reverse a string function 

function reverseAStirng(str){
	str = str.split("");
	str = str.reverse();
	str = str.join("");

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
	
	str = str.toLowerCase();
  	str = str.replace(/[^0-9a-zA-Z]/g,'');
  	var newStr = str.reverse();
  	
	return true
}

// Reverse the Vowels of a String

function vowelReverse(str){

	// I attempting to use RegEx to solve this problem
	// I have seen a loop solution to the check if a letter is a vowel
	// I dont want to use that, I want constant time solution
	str = str.split("");
	str = str.reverse("/^[aeiou]$/i")
	str = str.join();

	return str 
}
