/* Write a function that will take an array as input, sort, and return the array in descending
order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]. */

const array = [3, 2, 7, 4, 6, 9];

function sortArrayDescending(arr) {
   
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const sortedArray = sortArrayDescending(array);
console.log(sortedArray); 