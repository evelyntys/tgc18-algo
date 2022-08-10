// 1. define the base case (similar to the lopp sentinel);
// 2. what is the recursive step (similar to the repeated part in the for loop);
// 3. shrink the problem size for the next recursive call;

// find the sum of an array given an array of numbers
// base case - we reach the last number in the array 
//           - if the array is empty

function sumOfArray(arr, currentIndex){
    // check if we have exceed the last index
    if (currentIndex == arr.length){
        // last index of arr = arr.length -1
        return 0;
    } else{
        return arr[currentIndex] + sumOfArray(arr, currentIndex+1)
    }
}

// sumOfArray(arr, 0)
// => return arr[0] + sumOfArray(arr, 1)
// => return 4 + sumOfArray(arr, 1);
// => return 6 + sumOfArray(arr, 2);
// => return 8 + sumOfArray(arr, 3);
// => return 10 + sumOfArray(arr, 4) => returns 0
// => return 10
// => return 8+ 10
// => return 18
// => return 6 + 18
// => return 24
// => return 4+ 24
// => return 28

const arr = [4, 6, 8, 10];
console.log(sumOfArray(arr, 0));

function sumOfArrayv2(arr){
    if (arr.length == 0){
        return 0;
    } else {
        return arr[0] + sumOfArrayv2(arr.slice(1)); //only cloning from index 1 onwards => shrinking arrray as you pass on to next ver
    }
}

// sumOfArrayV2([4, 6, 8, 10])
// => return 4 + sumOfArrayv2([6, 8, 10]);
//               => return 6 + sumOfArrayv2([8, 10]);
//                             => return 8 + sumOfArrayv2([10]);
//                                           => return 10 + sumOfArrayv2([]);
//                                                          => return 0
//                             => return 8+10
//                             =< return 18
//               => return 6+18
//               => return 24
// => return 4 + 24
// => 28                     