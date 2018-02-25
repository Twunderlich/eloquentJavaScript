
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

console.log( nth( list, 4) );