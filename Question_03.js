/* Write a function that will take an array as input and return the sum of the two largest
numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
because 11 and 19 are the largest numbers. */

const array = [3, 7, 1, 5, 11, 19];

function sumOfTwoLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest) {
        
            secondLargest = arr[i];
        }
    }
    
    return firstLargest + secondLargest;
}

const result = sumOfTwoLargest(array);
console.log(result); 
