const arr = [1, 2, 3, 4, 5, 6, 7];
let result = 0;

function rec(array, index) {
  if (array[index]) {
    result += array[index];
    rec(arr, --index);
  }
  return result;
}

rec(arr, 4);
console.log(result);
