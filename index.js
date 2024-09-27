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

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

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


const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd)
// true

const isOver25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);
console.log(isOver25)
// false

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)
// true

const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;
console.log(isValid);


const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

let result = n1 % 5 
let result1 = n2 % 5
let result2 = n3 % 5
let result3 = n4 % 5

const subNumbers = n2 -n1

let multby5 = subNumbers*n3

let remenainder = multby5 % n4
console.log(remenainder)
// true 23


// -------------------------------------------Part 2----------------------------------------------


// let distance = 1500;
// let mph55 = 30,
// mph60 = 28,
// mph75 = 23;

// // 1500 / 55 - 81
// // 1500 / 60 - 25
// // 1500 / 75  - 20

// const totalGallonsOfFuelFor55mph = distance / mph55;
// console.log(
//     `the amount of gallons of fuel for the entire trip at 55mph is ${totalGallonsOfFuelFor55mph}`
// )
// // answer = 50 gallons

// const totalGallonsOfFuelFor60mph = distance / mph60;
// console.log(
//     `the amount of gallons of fuel for the entire trip at 55mph is ${totalGallonsOfFuelFor60mph}`
// )
// // answer = 53 gallons

// const totalGallonsOfFuelFor75mph = distance / mph75;
// console.log(
//     `the amount of gallons of fuel for the entire trip at 55mph is ${totalGallonsOfFuelFor75mph}`
// )
// // answer = 65 gallons



// // 55 miles per hour, you get 30 miles per gallon.
// // 60 miles per hour, you get 28 miles per gallon.
// // 75 miles per hour, you get 23 miles per gallon.

// let budget = 175;
// let fuelCost = 3;

// const budget1 = (distance / mph55) * fuelCost;
// console.log(budget1);
// console.log(`will the budget be enough: ${budget > budget1}`);
// // true

// const budget2 = (distance / mph60) * fuelCost;
// console.log(budget1);
// console.log(`will the budget be enough: ${budget > budget2}`);
// // true

// const budget3 = (distance / mph75) * fuelCost;
// console.log(budget1);
// console.log(`will the budget be enough: ${budget > budget3}`);
// // false

// let speed1 = 55,
//     speed2 = 60,
//     speed3 = 75;

// let travelingAvgOf55InHours = distance / speed1; 
// console.log(`this trip will take: ${travelingAvgOf55InHours} hours`);


// let travelingAvgOf60InHours = distance / speed2; 
// console.log(`this trip will take: ${travelingAvgOf60InHours} hours`);


// let travelingAvgOf75InHours = distance / speed3; 
// console.log(`this trip will take: ${travelingAvgOf75InHours} hours`);

// console.log(`the traveling avg of 55mph in hours is: ${travelingAvgOf55InHours} hours.
//     the traveling avg of 60mph in hours is: ${travelingAvgOf60InHours} hours.
//     the traveling avg of 75mph in hours is: ${travelingAvgOf75InHours} hours.`);

// console.log(`60 miles per hour would be best for the trip because it takes 
//     ${travelingAvgOf60InHours} and is within our budget which is: ${budget2}`)
