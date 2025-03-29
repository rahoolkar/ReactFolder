function init(n) {
  let arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }

  return arr;
}

function sum(arr) {
  let sum = arr.reduce((value, curr) => {
    return value + curr;
  }, 0);
  return sum;
}

export { init, sum };
