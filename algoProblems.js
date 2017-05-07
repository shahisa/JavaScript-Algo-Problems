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
//Return a Number

function findLongestWord(str){
	var strSplit = str.split(" "); // Make sure to add the space, if like ("") it will split everyletter instead of word.
	// The next part we use the sort(). It sorts an array by numbers, the Upper case, then lower case
	var longestWord = strSplit.sort(function(a,b){
		return b.length - a.length
	});

	return longestWord[0].length // Without the .length part it would return the longest word
}

// Stack
var stack = []; // A stack is an Array that uses the structure LIFO; this line initializes it
stack.push(10); // push() puts an item into the Array. So the value is now 10
stack.push(20); // stack = [10,20]
stack.push(30,40,50,75,85,90,100); // stack = [10,20,30,40,50,75,85,90,100]
var popEx = stack.pop(); // stack = [10,20,30,40,50,75,85,90]
console.log(popEx); // popEx = 100

//Queue
var queue =[]; // A queue is an Array that uses the structure FIFO
queue.push(987,839,303);// push() is used to put items in the Array
var shiftEx = queue.shift(); // queue = [839,303]
console.log(shiftEx); // shiftEx = 987

// Implement a Stack Using Queues
/*
push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
*/


// Creating a Linked List
function LinkedList(){
	this.head = null; // This is the head property (a pointer)
	}

	LinkedList.prototype.push = function(val){
		var node= {
			value: val,
			next: null
		}
		if(!this.head){
			this.head = node;
		}
		else{
			current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
	}
