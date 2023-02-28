// Q1. Find which rooms are opened at the end when each customer enter into the building
// and they change door state for their multiplicative room number upto 100
let mylist = [];

for (let i = 0; i < 100; i++) {
  mylist.push(false);
}

function CheckFinalDoorState(mydoors) {
  let i = 0;
  for (i = 1; i <= 100; i++) {
    let j;
    for (j = i - 1; j < 100; j += i) {
      if (mydoors[j]) {
        mydoors[j] = false;
      } else if (!mydoors[j]) {
        mydoors[j] = true;
      }
    }
  }
  console.log("Open doors");
  for (let i = 0; i < mydoors.length; i++) {
    if (mydoors[i]) {
      console.log(i + 1, " - Open");
    }
  }
  console.log("Other doors are closed");
}

CheckFinalDoorState(mylist);
