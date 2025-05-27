const swap = (arr, num1, num2) => {
  let temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
};

// Time complexity - worst and best case O(n * n)

const selectionSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i <= n - 2; i++) {
    let min = i;

    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    swap(arr, min, i);
  }
  0;

  return arr;
};
console.log(selectionSort([13, 46, 24, 52, 20, 9]));

/*
Time Complexity  worst case O(n * n)
Best case - O(n)
*/
const bubbleSort = (arr) => {
  let didSwap = 0;
  const n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j);
        didSwap = 1;
      }
    }
    if (didSwap === 0) return arr;
    console.log("runs");
  }
  return arr;
};

console.log(bubbleSort([13, 46, 24, 52, 20, 9]));
console.log(bubbleSort([9, 13, 20, 24, 46, 52]));

/* Time complexity
already sorted - O(n) for best and worst case
not sorted - O(n * n) for best and worst case
*/
const insertionSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
  }

  return arr;
};

console.log(insertionSort([14, 9, 15, 12, 6, 8, 13]));
