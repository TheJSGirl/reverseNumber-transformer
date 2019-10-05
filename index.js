/**
 * Given a file that contains random data
 * Your task is to rread the file and extract the integers 
 * Once you have the integers, return an array of reversed integers 
 */

const fs = require('fs');
const path = require('path');

// reverse a number
function reverseNum(num) {
  let reverseNum;
  let newNum = 0;
  while(num>0) {
    reverseNum = num%10;
    newNum = newNum*10 + reverseNum;
    num = Math.floor(num/10);
  }
  return newNum;
}

// given an array of numbers, return the array of reverse numbers
function reverseArrayOfNumbers(arr){
  let newArray = [];
  if(!arr && !arr.length) {
    throw new Error('numbers required');
  }
  arr.forEach(e => {
    newArray.push(reverseNum(e));
  });
  return newArray;
}

// read the file
function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'utf8'});
}

// extract the integers from the file
function extractIntegers(data) {
  const result = [];
  const res = data.split('\n').forEach(el => {
    if (parseInt(el)) result.push(parseInt(el));
  });
  return result;
}

function main(filename) {

  const stringData = readFile(filename);
  const arrayOfIntegers = extractIntegers(stringData);
  return reverseArrayOfNumbers(arrayOfIntegers);
}

const filename = path.resolve(__dirname, 'nums.txt');

console.log(main(filename));
