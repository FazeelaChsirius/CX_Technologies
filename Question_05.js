/* Write a function that will take an array of numbers and return the number most repeated
in the array with how many times it was repeated. For example, if the array is
[4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times. */

const array = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];

function mostRepeatedNumber(arr) {
    let countMap = {};

    for (let i = 0; i < arr.length; i++) {
        if (countMap[arr[i]] === undefined) {
            countMap[arr[i]] = 1;
        } else {
            countMap[arr[i]]++;
        }
    }

    let mostRepeated = null;
    let highestCount = 0;

    for (let num in countMap) {
        if (countMap[num] > highestCount) {
            highestCount = countMap[num];
            mostRepeated = num;
        }
    }
    return `${mostRepeated} is repeated ${highestCount} times`;
}

const result = mostRepeatedNumber(array);
console.log(result); 
