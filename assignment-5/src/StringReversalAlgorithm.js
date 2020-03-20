/*
  Reference Link :
  https://www.geeksforgeeks.org/reverse-a-string-in-java/
*/

/**
 * @param {number} inputString - inputString is string which is to be reversed
 */
var inputString = "harshit";

/**
 * @param {number} finalString - finalString is final reversed string
 */
var finalString = "";

/**
 * @param {function(foo: number, bar: string): boolean} param - reverseString is a function which performs reversal process of Input String.
 */
function reverseString(inputString){
	for(var i = inputString.length - 1; i >= 0; i--){
    finalString += inputString[i];

		}
  return finalString;
	}

/**
 * @return {number} - function returns reveresed string.
 */
var result = reverseString(inputString);
console.log(result);