let a = [34, 5, 2, 1, 6, 9];

function bubbleSort(arr) {
  let i, j;
  let temp;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(a));

// function selectionSort(arr) {
//   let sortedArray = [];
//   let i, j;
//   let temp;
//   for (i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (j = i; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   return arr;
// }

// console.log(selectionSort(a));
