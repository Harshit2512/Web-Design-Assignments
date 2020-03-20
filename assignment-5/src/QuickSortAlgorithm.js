/*
  Reference Link :
  https://www.youtube.com/watch?v=COk73cpQbFQ
*/

/**
 * @param {number[]} array - Number array which is to be sorted
 */
var array = [10,6,5,4,9];

//console.log(array);

/**
 * @param {function(foo: number, bar: string): boolean} param - swap is a function which performs swpping operation between two elements of given array.
 */
function swap(array, leftPointer, rightPointer){
	
	/**
     * @param {number} temp - temp is a temporary variable for swapping action.
     */ 
    var temp = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = temp;
}

/**
 * @param {function(foo: number, bar: string): boolean} param - partition is a function which performs partition operation in given array.
 */
function partition(array, left, right){
	
	/**
     * @param {number} pivotElement - pivotElement is middle index of the array of numbers
     */
    var pivotElement = array[Math.floor((left + right) / 2)];
    console.log(pivotElement);
	
	/**
     * @param {number} lpointer - lpointer is starting index of the array of numbers to perform partition
     */
    var lpointer = left;
	
	/**
     * @param {number} rPointer - rPointer is end index of the array of numbers to perform partition
     */
    var rPointer = right;

    while(lpointer <= rPointer){
      while(array[lpointer] < pivotElement){
        lpointer++;
      }

      while(array[rPointer] > pivotElement){
         rPointer--;
      }

      if (lpointer <= rPointer){
          swap(array, lpointer, rPointer);
          lpointer++;
          rPointer--;
      }
    }
    return lpointer;
}


/**
 * @param {function(foo: number, bar: string): boolean} param - quickSort is a function which performs sorting operation in given array.
 */
 
  /**
   * @return {number} - function returns sorted array.
   */
function quickSort(array,left, right){
    if (array.length > 1){
		
		/**
         * @param {number} newSubListIndex - newSubListIndex is a index created by partitioned array.
         */ 
       var newSubListIndex = partition(array, left, right);
       if(left < newSubListIndex-1){
          quickSort(array, left, newSubListIndex - 1);
       }
       if(newSubListIndex < right){
         quickSort(array, newSubListIndex, right);
       }
    }
	
    return array;
}



var resultArray = quickSort(array, 0, array.length-1);
console.log(resultArray);