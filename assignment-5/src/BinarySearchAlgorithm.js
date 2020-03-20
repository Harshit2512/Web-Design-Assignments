/*
  Reference Link :
  https://www.geeksforgeeks.org/binary-search-in-javascript/
*/


/**
 * @param {number[]} array - Number array from which target element to be identified
 */
array = [2,5,7,9,13,14, 18, 25, 29];

/**
 * @param {number} flag - flag variable is used to identify whether input number is present in given array or not.
 */ 
var flag = false;
/**
 * @param {number} start - start is beginning index of the array of numbers
 */  
var start = 0;

/**
 * @param {number} end - end is last index of the array of numbers
 */ 
var end = array.length - 1;

/**
 * @param {number} input - input is a number to be searched in array using Binary Search algorithm.
 */ 
var input = 15;
//console.log("Searched value in the array is : " +input);
//var midValIndex = Math.floor((start + end) / 2);
//console.log("Middle value Index of the Array : " + midValIndex);
//console.log("Value at the Middle Index of the array : " +array[midValIndex]);
	
	
  /**
   * @param {function(foo: number, bar: string): boolean} param - BinarySearch is a function which performs search for given input in array.
   */
  function binarySearch(array, input, start, end){

      while (start <= end){

      var midValIndex = Math.floor((start + end) / 2);
      console.log("Middle Index : " + midValIndex);
      console.log("Value  : " + array[midValIndex]);

      if(input > array[midValIndex]){
          console.log("Search in Right SubList");
          start = midValIndex + 1;
          end = end;
      }

       if(input < array[midValIndex]){
          console.log("Search in Left SubList");
          end = midValIndex - 1;
          start = start;
      }

       if(input === array[midValIndex]){
        console.log("Input Element found in array");
        flag = true;
        break;
      }

  }
    if(flag == false){
        console.log("Given Input number not present in array.");
    }
  }

  /**
   * @param {number} input - input is a number to be searched in array using Binary Search algorithm.
   * @param {number} start - start is beginning index of the array of numbers
   * @param {number} end - end is last index of the array of numbers
   */
  binarySearch(array, input, start, end);
