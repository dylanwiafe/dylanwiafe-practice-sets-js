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

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
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

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
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

// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
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

function insertDashesIntoArray(numArray) {
  let addDashes =
  if (num % 2 === 0){
      
  }
    numArray[0] +
    "-" +
    numArray[1] +
    numArray[2] +
    numArray[3] +
    "-" +
    numArray[4] +
    "-" +
    numArray[5];
  return addDashes;
}

console.log(insertDashesIntoArray([0, 2, 5, 4, 6, 8]));
// 7. Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
// Click me to see the solution

function sortMyArray(numArray) {
  let sortedArray = numArray.sort();
  // let filterArray = sortedArray.filter(numArray > -3)
  console.log(sortedArray);
}

sortMyArray([-4, -3, 1, 2, 3, 5, 6, 7, 8]);
// 8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
// Click me to see the solution

// https://javascript.plainenglish.io/how-to-find-the-most-frequent-element-in-an-array-in-javascript-c85119dc78d2
// function findPseudoMode(arr) {

// }

// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. Go to the editor
// Click me to see the solution

// 10. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
