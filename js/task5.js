const arr = [1, 2, 3, 4, 5];
let newArr = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let numSq = arr[i] ** 2;
  newArr.push(numSq);
}
console.log(newArr);
for (let j = 0; j < newArr.length; j++) {
  sum += newArr[j];
}
console.log(sum);
