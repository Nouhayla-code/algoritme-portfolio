function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function simpleSort(arr) {
  for (let i = 0; i < arr.length - 1; ) {
    const lookat = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < lookat) {
        const temp = arr[j];
        arr[j] = lookat;
        arr[i] = temp;
      }
      if (lookat > arr[i + 1]) {
        swap(i, i + 1);
      }
    }
    return arr;

    function swap(indexA, indexB) {
      const temp = arr[indexA];
      arr[indexA] = arr[indexB];
      arr[indexB] = temp;
    }
  }
}
