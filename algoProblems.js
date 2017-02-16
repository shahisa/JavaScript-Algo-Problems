// Reverse a string function 

function reverseAStirng(str){
	str = str.split("");
	str = str.reverse();
	str = str.join();

	return str 
}

// Factorialize a Number

function factorializeNum (num){
	// This should apply to all code that is either 0 or 1
	// I used "===" because these are strictly equal values, meaning they have the same 
	// value and type
	if (num === 0 || num === 1)
		return 1
	
	// This for loop is for all numbers not 0 or 1
	// Just read throught the logic of this solution
	for (var i = num -1; i >= 1; i--){
		num = num*i;
	}
	return num
}
