
// chapter 2 - looping triangle - complete!
//
// Write a loop that makes seven calls to console.log to output the follow triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangle(num, char) {
	if ( typeof char !== 'string' ) {
		console.log( 'Character must be in string format (\'string\')' );
	} else {
		var charUsed = char
		for ( var i = 0; i < num; i++ ) {
			console.log( charUsed );
			charUsed += char;
		}
	}
}

// triangle(7, '#');



// chapter 2 - FizzBuzz - complete!
//
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, abd for numbers divisible by 5 (and not 3),
// print "Buzz" instead.
//
// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by
// both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzBuzz(max) {
	for ( var i = 1; i < max + 1; i++ ) {
		if ( i % 3 == 0 && i % 5 == 0 ) {
			console.log( "FizzBuzz" );
		} else
		if ( i % 3 == 0 ) {
			console.log( "Fizz" ); 
		} else 
		if ( i % 5 == 0 ) {
			console.log( "Buzz" );
		} else 
		console.log(i);
	}
}

// fizzBuzz(15);



// chapter 2 - Chess board. - complete
//
// Write a program that creates a string that represents an 8x8 grid, using newline characters to seperate lines.
// At each position of the grid there is either a space or a "#" character. The characters should for a Chess Board.
//
// Passing this string to console.log should show something like this:
//
//	  # # # #
//	 # # # #
//	  # # # #
//	 # # # #
//	  # # # #
//	 # # # #
// 	  # # # #
//	 # # # #
//
// When you ahve a program that generates this pattern, define a variable size = 8 and change the program so that
// it works for any size, outputtting a grid of the given width and height.

function chessBoard( num ) {
	var size 			= num;
	var outputStr = '';
	for ( var i = 0; i < num; i++ ) {
		for ( var j = 0; j < num; j++ ) {
			if ( ( i + j ) % 2 === 0 ) {
				outputStr += ' ';
			} else {
				outputStr += '#';
			}
		}
		outputStr += '\n'
	}
	return outputStr.slice( 0, outputStr.length - 1 );
}

// console.log( chessBoard( 8 ) );



// chapter 3 - minimum - complete!
//
// Write a function min that takes two arguments and returns their minimum

function min( argOne, argTwo ) {
	return argOne > argTwo ? argOne : argTwo;
}

// console.log( min( -2, -5 ) );



// chapter 3 - recursion - complete!
//
// zero is even
// one is odd
// for any other number N, its evenness is the same as N - 2.
//
// Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean
//
//test it on 50 and 75. See how it beahves -1, Why? Can you think of way to fix this?

function isEven( int ) {
  var num 	= int
  var even = 0;
  var odd  = 1;

  if (int < 0) {
  	num *= -1;
  }

  if ( num === even ) {
 	  return true;
  } else 
  if ( num === odd ) {
 	  return false;
  } else {
 	  return isEven( num - 2 );
  }
}

// console.log( isEven( -6 ) );



// chapter 3 - Bean Counting - complete!
//
// You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length.
// The returned value will be a string containing only one character (for example, "b"), The first character has position sero, which causes 
// the last one to be found at position string.length -1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
//
// Write a function countBs that takes a string as its only argument and returns a number that indicates how man upercase "B"
// characters are in the string.
//
// Next, write a function called countChar that behaves like countBs, except  it takes a secound argument that indicats the character that is to be 
// counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.

function countBs( str ) {
	return countChar( str, 'B');
}

// console.log(countBs( 'This is a test', 'T'));

function countChar( stri, chara, caseSensitive ) {
	var str = stri;
	var char = chara;

	if ( typeof str !== 'string' ) {
		console.log( 'String argument must be a string.' );
	}
	if ( typeof char !== 'string' ) {
		console.log( 'Character argument must be a string' );
	}
	if ( char.length > 1 ) {
		console.log( 'Character argument must be a single character' );
	}

	if ( caseSensitive !== undefined && caseSensitive === true) {
		char = char.toLowerCase();
		str = str.toLowerCase();
	}

	var charCount = 0;
	str.split( '' ).forEach( function( ele ) {
		if ( char === ele ) {
			charCount++;
		}
	});
	return charCount;
}

// console.log( countChar( 'This is a Test 9', 'T', true))



// chapter 4 - The sum of a range - complete!
//
// Write a function that takes two arguments, start and end, and returns an array containing all the nmbers from start
// up to (and including) end.
//
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous 
// program and see whether it does indeed return 55.
//
// Bonus assignment:
// Modify your range function to take an optional third argument that indicates the "step"  value used to build up the
// array. If no step is given, the array elements go up by increments of one.

function range( startNum, endNum, step ) {
	var rangeArr = [];
	var increment = 1;

	if ( step !== undefined && step !== 0 ) {
		increment = step;
	}
	if ( increment < 0 ) {
		increment *= -1;
	}

	if ( startNum > endNum ) {
		for ( var i = startNum; i >= endNum; i -= increment ) {
			rangeArr.push( i );
		}
	} else {
		for ( var i = startNum; i <= endNum; i += increment ) {
			rangeArr.push( i );
		}
	}
	return rangeArr;
}

// console.log( range( 10, 1) );

function sum( numArray ) {
	return numArray.reduce( function( acc, curr ) {
		return acc + curr;
	} );
}

// console.log( sum( range( 1, 10 ) ) );



// chapter 4 - Reversing an array - completed
//
// Write two functions, reversArray and reverseArrayInPlace, does what the reverse method does: it modifies the array 
// given as argument in order to reverse its elements. Neither may use the standard reverse method.

function reverseArray( numArray ) {
	var arrayNum = [];
	for ( var i = numArray.length - 1; i >= 0; i-- ) {
		arrayNum.push( numArray[i] );
	}
	return arrayNum;
}

// console.log( reverseArray( range( 1, 10 ) ) );

function reverseArrayInPlace( numArray ) {
	for ( var i = 0; i < Math.floor( numArray.length / 2 ); i++ ) {
		var temp = numArray[ i ];
		numArray[ i ] = numArray[ numArray.length - 1 - i ];
		numArray[ numArray.length - 1 - i ] = temp;
	}
	return numArray;
}

// console.log( reverseArrayInPlace( range( 1, 10 ) ) );

// chapter 4 - A list - incomplete

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
    	value: 3,
    	rest: null
    }
  }
}

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as
// argument, and write a listToArray function that produces an array from a list.

function arrayToList( numArray ) {
	var arr 	= numArray;
	var list 	= { value: arr.shift(), rest: null };
	if ( arr.length > 0 ) {
		list.rest = arrayToList( arr );
	}
	return list;
}

// console.log( JSON.stringify( list ) === JSON.stringify( arrayToList( range( 1, 3 ) ) ) );

function listToArray( list ) {
	var arr = [];
	arr.push( list.value );
	if ( list.rest !== null ) {
		listToArray( list.rest ).forEach( function( val ) {
			arr.push( val );
		} );
	}
	return arr;
}

// console.log( JSON.stringify( listToArray( list ) ) === JSON.stringify( range( 1, 3 ) ) );
// console.log( listToArray( list ) );

// Write the helper function prepend, which takes an element and a list and creates a new list that that
// adds the element to the front of the input list.

function prepend( ele, list ) {
	return { value: ele, rest: list };
} 

// var prependedList = prepend( 4, list );
// console.log( prepend( 5, prependedList ) );

// Write nth, which takes a list and a number, and return the element at the given position in the list,
// or undefined when there is no such element
//
// Make it recursive

// function nth( list, pos ) {
// 	var count = 1;
// 	for ( var node = list; node; node = node.rest ) {
// 		if ( count === pos ) {
// 			return node.value;
// 		}
// 		count++;
// 	}
// }

function nth( list, pos ) {
	var cur = list;
	var ele = undefined;

	if ( pos > 1 ) {
		ele = nth( cur.rest, pos - 1);
	} else {
		ele = cur === null ? undefined : cur.value;
	}
	return ele;
}

// console.log( nth( list, 4) );

// chapter 4 = Deep comparison

// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
//
// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same
// properties whose values are also equal when compared with a recursive call to deepEqual.
//
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, 
// you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take 
// one silly exception into account: by a historical accident, typeof null also produces "object".

function deepEqual( valueOne, valueTwo ) {
	var areEqual = true;
	if ( typeof valueOne !== 'object' && typeof valueTwo !== 'object' ) {
		areEqual = valueOne === valueTwo;
	} else if ( valueOne !== null && valueTwo !== null ) {
		if ( Array.isArray( valueOne ) && Array.isArray( valueTwo ) ) {
			if ( valueOne.length !== valueTwo.length ) {
				areEqual = false;
			} else { 
				valueOne.forEach( function( val, i ) {
					if ( deepEqual( valueOne[ i ], valueTwo[ i ] ) !== true ) {
						areEqual = false;
					}
				} );
			}
		} else {
			if ( Object.keys( valueOne ).length !== Object.keys( valueTwo ).length ) {
				areEqual = false;
			} else {
			for ( var key in valueOne ) {
					if ( deepEqual( valueOne[ key ], valueTwo[ key ] ) !== true ) {
						areEqual = false;
					}
				}
			}
		}
	}
	return areEqual;
}

// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

// chapter 5 - Flattening - incomplete

//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has 
// all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten( arr ) {
	return arr.reduce( function( acc, cur ) {
		return acc.concat( cur );
	}, [] );
}

console.log( flatten( arrays ) );
// → [1, 2, 3, 4, 5, 6]

// chapter 5 - Mother-child age difference  - incomplete

require("./path/to/ancestry.js") will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;

// Using the example data set from this chapter, compute the average age difference between mothers and children (the age of 
// the mother when the child is born). You can use the average function defined earlier in this chapter.
//
// Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes 
// it easy to find a person’s object from their name, might be useful here.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

// → 31.2

// chapter 5 - Historical life expectancy - incomplete
//
// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. 
// Let’s take a closer look at that phenomenon.
//
// Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by 
// taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

// For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function 
// that computes the group for an element in the array and returns an object that maps group names to arrays of group members.

// chapter 5 - Every and then some - incomplete
// Arrays also come with the standard methods every and some. Both take a predicate function that, when called with an array element 
// as argument, returns true or false. Just like && returns a true value only when the expressions on both sides are true, every returns
//  true only when the predicate returns true for all elements of the array. Similarly, some returns true as soon as the predicate returns
// true for any of the elements. They do not process more elements than necessary—for example, if some finds that the predicate holds for 
// the first element of the array, it will not look at the values after that.
//
// Write two functions, every and some, that behave like these methods, except that they take the array as their first argument rather than being a method.

// Your code here.

// console.log(every([NaN, NaN, NaN], isNaN));
// → true
// console.log(every([NaN, NaN, 4], isNaN));
// → false
// console.log(some([NaN, 3, 4], isNaN));
// → true
// console.log(some([2, 3, 4], isNaN));
// → false
