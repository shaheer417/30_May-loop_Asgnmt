// Question 1

// const myWork: { name: string; status: boolean }[] = [];

// for (let i = 1; i <= 10; i++) {
//   const lessonName = `Lesson ${i}`;
//   const lessonStatus = i % 2 === 0;

//   const lessonObject = {
//     name: lessonName,
//     status: lessonStatus,
//   };

//   myWork.push(lessonObject);
// }

// console.log(myWork);

// const myArr = myWork.filter((obj) => obj.status === false);
// console.log(myArr);

//===============================================================================================

// Question 2

// const maxValue: number = 100;

// const randomNumber: number = Math.floor(Math.random() * maxValue) + 1;
// console.log(`The number is: ${randomNumber}`);

// let isCorrectGuess: boolean = false;

// function generateRandomArray(length: number): number[] {
//   const randomArray: number[] = [];
//   for (let i = 0; i < length; i++) {
//     const randomValue = Math.floor(Math.random() * 100);
//     randomArray.push(randomValue);
//   }
//   return randomArray;
// }

// const myRandomArray = generateRandomArray(10);
// console.log(myRandomArray);

// let index: number = 0;

// // !isCorrectGuess returns truthy value. bcz the condition runs as long as the condition will be true

// while (!isCorrectGuess && index < myRandomArray.length) {
//   const currentGuess: number = myRandomArray[index];

//   switch (true) {
//     case currentGuess === randomNumber:
//       console.log(`Correct guess! The number was ${randomNumber}.`);
//       isCorrectGuess = true;
//       break;
//     case currentGuess < randomNumber:
//       console.log(`Guess ${currentGuess} is too low.`);
//       break;
//     default:
//       console.log(`Guess ${currentGuess} is too high.`);
//   }

//   index++;
// }

// if (!isCorrectGuess) {
//   console.log(
//     `Failed to guess the right number, the correct number was ${randomNumber}.`
//   );
// }

//=========================================================================================

// // Question 3

// let counter: number = 0;

// const step: number = 5;

// do {
//   console.log(`Counter: ${counter}`);

//   counter += step;
// } while (counter < 100);

// console.log(`Final Counter: ${counter}`);

//=====================================================================================

// Question 4

// const myObject: { item1: string; item2: string; item3: string } = {
//   item1: "Value 1",
//   item2: "Value 2",
//   item3: "Value 3",
// };

// for (const property in myObject) {
//   if (myObject.hasOwnProperty(property)) {
//     let myArr: string[] = ["Ahmer", "Ali", "Shaheer"];

//     for (let i = 0; i < myArr.length; i++) {
//       myObject[property as keyof typeof myObject] = myArr[i];
//       console.log(
//         `${property}: ${myObject[property as keyof typeof myObject]}`
//       );
//     }
//   }
// }

//=========================================================================================

// Question 5

// const myArray: number[] = [];

// for (let i = 1; i <= 10; i++) {
//   myArray.push(i);
// }

// console.log("myArray:", myArray);

// for (let i = 0; i < myArray.length; i++) {
//   console.log(`Element at index ${i}: ${myArray[i]}`);
// }

// for (const value of myArray) {
//   console.log(`Value: ${value}`);
// }
