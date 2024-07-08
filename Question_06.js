/* Write a function that will take an array as input, it will rotate the array to the right 1 time
and return the rotated array. Rotation of the array means that each element is shifted right
by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7] */

const array = [3, 8, 9, 7, 6];

function rotateArrayRight(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    let lastElement = arr.pop();
    arr.unshift(lastElement);

    return arr;
}

const rotatedArray = rotateArrayRight(array);
console.log(rotatedArray); 
