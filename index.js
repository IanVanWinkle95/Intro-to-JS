// let myVar = "Hello World!"

// console.log(typeof 42);
// console.log(typeof myVar);

// let newNumber = 9 // 9
// newNumber *= 3 // 27
// newNumber++ // 28
// newNumber--  //27
// console.log(newNumber)
// let currentNumber = ++newNumber

// ++newNumber
// let currentNumber = newNumber

// console.log(currentNumber)
// console.log(newNumber)

// The initial numbers that must be verified.
const n1 = 1;
const n2 = 6;
const n3 = 19;
const n4 = 24;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// console.log(isSum50)
// true

// let divisbleBy5= n1/5
// 0.2

// let divisbleBy5= n2/5
// 1.2

// let divisbleBy5= n3/5
// 3.8

// let divisbleBy5= n4/5 
// 4.8

// console.log(divisbleBy5);


// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
// console.log(isTwoOdd)
// true

// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
// console.log(isOver25)
// false

// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
// console.log(isUnique)
// true

const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid)






