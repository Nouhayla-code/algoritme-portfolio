function insertionSortShift(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    if (key < arr[i - 1]) {
      for (let j = i - 1; j >= 0 && key < arr[j]; j--) {
        let temp = arr[j];
        arr[j] = key;
        arr[j + 1] = temp;
        count++;
      }
    } else {
      continue;
    }
  }
  console.log(count);
  return arr;
}
const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

function insertionSortSwap(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let secondKey = arr[j];
    if (key < arr[i - 1]) {
      for (let j = i - 1; j >= 0 && key < arr[j]; j--) {}
      if (key > arr[i + 1]) {
        swap(i, i + 1);
      } else {
        continue;
      }
    }
    console.log(count);
    return arr;

    function swap(indexA, indexB) {
      const temp = arr[indexA];
      arr[indexA] = arr[indexB];
      arr[indexB] = temp;
    }
  }
}
