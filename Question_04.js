/* Write a function that will take an array as input and return an array with every missing
element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
entry is 9, and missing numbers are [0,5,8]. */

const array = [3, 4, 9, 1, 7, 3, 2, 6];

function findMissingElements(arr) {
    let highestEntry = Math.max(...arr);
    console.log('Highest Entry:', highestEntry)

    let present = new Array(highestEntry + 1).fill(false);
 
    for (let i = 0; i < arr.length; i++) {
        present[arr[i]] = true;
    }
    
    let missingElements = [];
    for (let i = 0; i <= highestEntry; i++) {
        if (!present[i]) {
            missingElements.push(i);
        }
    }
    
    return missingElements;
}

const result = findMissingElements(array);
console.log('MissingValues:', result); 
