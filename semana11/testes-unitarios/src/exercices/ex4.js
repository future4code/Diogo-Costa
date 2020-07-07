export function bubbleSort(arr) {
  const loop = arr.length;

  for (let i = 0; i < loop; i++) {
    for (let j = 0; j < loop; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//console.log(bubbleSort([14, 33, 27, 35, 10, 56, 101]));
