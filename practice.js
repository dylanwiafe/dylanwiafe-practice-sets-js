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
  console.log(arr.shift());
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
}

joinAllElem();
