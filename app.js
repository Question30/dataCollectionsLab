//Part 1
const string =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

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

//Part 4
let arrObj = parseObj(parseCSVCol(string));

//1. Remove the last element from the sorted array
arrObj.pop();
//2. insert object at index1
let barryObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
arrObj.splice(1, 0, barryObj);
//3.add to the end of the array
arrObj.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(arrObj);

//4. find average age of the group
function calcAvg(array) {
  let sum = 0;

  console.log(array.length);

  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i].age);
  }

  return sum / array.length;
}

console.log(calcAvg(arrObj));

//Helper function flattens the multidimensional arrays
//flatten
function flatten(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArr[newArr.length] = array[i][j];
      }
    } else {
      newArr[newArr.length] = array[i];
    }
  }

  return newArr;
}

//Converts our array of objects into a csv
function parseArrObj(array) {
  let csvArray = [];

  csvArray.push(Object.keys(array[0]));
  for (let i = 0; i < array.length; i++) {
    csvArray.push(Object.values(array[i]));
  }

  let flattenedArray = flatten(csvArray);
  let joinedString = flattenedArray.join(",");

  return joinedString;
}

console.log(parseArrObj(arrObj));
