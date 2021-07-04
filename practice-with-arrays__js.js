//Practice set 06/29/2021

// Write a JavaScript function to check whether an `input` is an array or not

function isItAnArray(arg) {
  console.log(Array.isArray(arg));
}

isItAnArray(123);

//Write a JavaScript function to clone an array.
// function cloneArray(arr){
//     return arrClone
//     }

function cloneArray(arr) {
  console.log(arr.slice());
}

cloneArray(["elephant", "camel"]);

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function getFirstElem(arr) {
  //   console.log(arr.shift()); //deltes the bfirst elem in the array
  console.log(arr[0]);
}

getFirstElem([7, 9, 0, -2]);

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function removeLastElem(arr) {
  console.log(arr.pop());
}

removeLastElem([7, 9, 0, -2]);

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

function joinAllElem() {
  myColor = ["Red", "Green", "White", "Black"];
  console.log(myColor.toString());
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  console.log(myColor.join(""));
}

joinAllElem();

//Practice set 07/01/2021

// 6. Write a JavaScript program which accept a number as input and insert dashes
// (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// function insertDashesIntoArray(numArray) {
//   let addDashes =
//   if (num % 2 === 0){

//   }
//     numArray[0] +
//     "-" +
//     numArray[1] +
//     numArray[2] +
//     numArray[3] +
//     "-" +
//     numArray[4] +
//     "-" +
//     numArray[5];
//   return addDashes;
// }

// console.log(insertDashesIntoArray([0, 2, 5, 4, 6, 8]));

function insertDashesIntoArray(numArray) {
  let newArr = [];
  for (let i = 0; i < numArray.length; i++) {
    // Check if value is even
    if (isEven(numArray[i])) {
      // Check if the value preceeding the current iteration is also even
      // if true, concatenate the "-" to the current item and push to the new array
      // if false, simply push value to the new array
      if (i !== 0 && isEven(numArray[i - 1])) {
        newArr.push("-" + numArray[i]);
      } else {
        newArr.push(numArray[i]);
      }
    } else {
      newArr.push(numArray[i]);
    }
  }

  // helper function isEven
  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  }

  console.log(newArr.join(""));
}

insertDashesIntoArray([1, 2, 5, 4, 6, 8, 7, 5, 2, 3, 4, 5, 7, 9]); // "1254-6-875234579"

// 7. Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function sortMyArray(numArray) {
  let sortedArray = numArray.sort();
  // let filterArray = sortedArray.filter(numArray > -3)
  console.log(sortedArray);
}

sortMyArray([-4, -3, 1, 2, 3, 5, 6, 7, 8]);
// 8. Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
// Click me to see the solution

// https://javascript.plainenglish.io/how-to-find-the-most-frequent-element-in-an-array-in-javascript-c85119dc78d2
// function findPseudoMode(arr) {

// }

// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mode(arr){
  
  //Define a js object to store key value pairs
  modeObj = {};
  max = arr[0];
  maxCount = 1;
  for(let i = 0; i < arr.length; i++){
    let item = arr[i]
    if(!modeObj.hasOwnProperty(arr[i])){
      modeObj[item] = 1;
    }else{
      modeObj[item]++;
    }
    
    if(modeObj[item] > maxCount){
      max = item;
      maxCount = modeObj[item];
    }
  }
  
  console.log(max);
  console.log(maxCount);
  return max
}

mode([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);



// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// Click me to see the solution
function invertCase(str) {
  if (str === str.toLowerCase()) {
    str.toUpperCase();
    // console.log(invertCase(str));
  } else {
    str.toLowerCase();
    // console.log(invertCase(str));
  }
  return str;
  // console.log(invertCase(str));
}

console.log(invertCase("The Quick Brown Fox"));

// 10. Write a JavaScript program which prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

function sliceArray(arr) {
  let firstArray = arr[0];
  let firstElem = firstArray.slice();
  for (i = 0; i < arr.length; i++) {
    console.log(arr.slice());
  }
  console.log(firstElem);
  console.log(arr[0]);
  console.log(arr[0].slice());
  console.log(arr[0].slice());
  console.log(arr[0].slice());
}

sliceArray([
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
]);

// 11. Write a JavaScript program to find the sum of squares of a numeric vector.

// 12. Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProduct(arr) {
  for (i = 0; i < arr.length; i + arr[i - 1]) {
    let runningTotal = arr[i] + 0;
    console.log(runningTotal);
  }
}

sumAndProduct([1, 2, 3]);

// 13. Write a JavaScript program to add items in an blank array and display the items.
// Sample Screen :
// add elements in an blank array

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.
