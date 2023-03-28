console.log("*****CICLO WHILE PART1*****");
let xValue = 10;
while (xValue > 0) {
    console.log(xValue);
    xValue-=0.5;
} //PART 1 WHILE, VALORES .05

console.log("*****CICLO WHILE PART2*****");

let num = 1;

while (num <= 100) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
} //PART 2 WHILE, NUMBERS

console.log("*****CICLO WHILE PART3*****");

function printSquareBrackets(n) {
    let i = 1;
  
    while (i <= n) {
    console.log(`[${i}]`);
      i++;
    }
  } 
  console.log(printSquareBrackets(20));
  //PART 3 WHILE


console.log("*****CICLO WHILE PART4*****");

function sumOfN(n) {
    let sum = 0;
    let i2 = 1;
  
    while (i2 <= n) {
      sum += i2;
      i2++;
    }
  
    return sum;
  }

let sum1 = sumOfN(5);
console.log(sum1); // Output: 15

let sum2 = sumOfN(19);
console.log(sum2); // Output: 190

let sum3 = sumOfN(25);
console.log(sum3); // Output: 325

let sum4 = sumOfN(50);
console.log(sum4); // Output: 1275

let sum5 = sumOfN(100);
console.log(sum5); // Output: 5050