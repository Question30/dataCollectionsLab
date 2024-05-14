//Part 1
const string =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

function parseCSV(string) {
  let strArr = string.split("\n");
  strArr.forEach((element) => {
    console.log(element);
  });
}

// parseCSV(string);

//Part 2

function parseCSVCol(string) {
  let newArr = [];

  let strArr = string.split("\n");
  //   console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].split(","));
  }

  return newArr;
}

// console.log(parseCSVCol(string));

//Part 3
function parseObj(array) {
  let newArr = [];

  for (let i = 1; i < array.length; i++) {
    let myObj = {};
    for (let j = 0; j < array[i].length; j++) {
      myObj[array[0][j].toLowerCase()] = array[i][j];
    }
    newArr.push(myObj);
  }

  return newArr;
}

console.log(parseObj(parseCSVCol(string)));
