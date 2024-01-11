// Exercise 2: Single Number

const singleNumber = function (nums) {
  let dublicateNumber = [];
  let numbers = [];
  nums.map((item) => {
    //console.log(dublicateNumber.indexOf(item), item);
    numbers.indexOf(item) < 0 ? numbers.push(item) : dublicateNumber.push(item);
  });
  //console.log(numbers);
  //console.log(dublicateNumber);
  const result = numbers.filter((item) => {
    return !dublicateNumber.includes(item);
  });
  //console.log(result);
  return result[0];
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
