// let text = "demotext";
// let myarr = text.split("");

// function CleanArray(arr) {
//   let resultArray = [];
//   let flag = false;
//   let first_reppeated = "";
//   arr.forEach((element) => {
//     if (resultArray.includes(element) && !flag) {
//       first_reppeated = element;
//       flag = true;
//       return element;
//     } else if (!resultArray.includes(element)) {
//       resultArray.push(element);
//     }
//   });
//   return first_reppeated;
// }

// console.log(CleanArray(myarr));

let text = "a green apple";
let list = [];
text.split("").forEach((txt) => {
  if (!list.includes(txt)) list.push(txt);
});

console.log(list.join(""));
