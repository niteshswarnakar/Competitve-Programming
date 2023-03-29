let text = "iamniteshswarnakar";
let myarr = text.split("");

function CleanArray(arr) {
  let tempArray = [];
  let resultArray = [];
  arr.forEach((element) => {
    if (resultArray.includes(element)) {
      tempArray.push(element);
      resultArray = resultArray.filter((item) => item !== element);
    } else if (!tempArray.includes(element)) {
      resultArray.push(element);
    }
  });
  return resultArray;
}

console.log(CleanArray(myarr));
