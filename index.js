
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