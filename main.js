// Exclude the repeatative elements from the array

// let text = "iamniteshswarnakar";
// let myarr = text.split("");

// function CleanArray(arr) {
//   let tempArray = [];
//   let resultArray = [];
//   arr.forEach((element) => {
//     if (resultArray.includes(element)) {
//       tempArray.push(element);
//       resultArray = resultArray.filter((item) => item !== element);
//     } else if (!tempArray.includes(element)) {
//       resultArray.push(element);
//     }
//   });
//   return resultArray;
// }

// console.log(CleanArray(myarr));

// selection sort

let myarr = [3, 6, 1, 2, 9, 67, 7];

const selection_sort = (arr) => {
  let i = 0;
  let min_index;
  let j;
  for (i = 0; i < arr.length - 1; i++) {
    min_index = i;
    for (j = i; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
  return arr;
};

console.log(selection_sort(myarr));
