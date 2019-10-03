
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

function reverseArrayOfNum(arr){
  let newArray = [];
  arr.forEach(e => {
    newArray.push(reverseNum(e));
  });
  return newArray;
}

let arr = [123, 345, 678, 444];
console.log(reverseArrayOfNum(arr));