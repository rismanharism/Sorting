// function sorting(array) {
//     // your code here
//     let temp = 0
//     let sorted = false
//     while (sorted === false) {
//         sorted = true
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] > array[i + 1]) {
//                 sorted = false
//                 temp = array[i];
//                 array[i] = array[i + 1]
//                 array[i + 1] = temp
//             }
//         }
//     }
//     return array
// }

// function sortingByType(array) {
//     // your code here
//     let result = []
//     let number = []
//     let string = []
//     let boolean = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             number.push(array[i])
//         } else if (typeof array[i] === 'string') {
//             string.push(array[i])
//         } else if (array[i] === 'boolean') {
//             boolean.push(array[i])
//         }
//     }
//     number = sorting(number)
//     string = sorting(string)
//     boolean = sorting(boolean)
//     result.push(number, string, boolean)
//     return result
// }

// function sortAllClean(array) {
//     //your code here
//     let result = []
//     let number = []
//     let string = []
//     let boolean = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             if (!isNaN(array[i])) {
//                 number.push(array[i])
//             }
//         } else if (typeof array[i] === 'string') {
//             string.push(array[i])
//         } else if (array[i] === 'boolean') {
//             boolean.push(array[i])
//         }
//     }
//     number = sorting(number)
//     string = sorting(string)
//     boolean = sorting(boolean)
//     result.push(number, string, boolean)
//     return result
// }

// ======================================================================================

function sorting(array) { // Mengurutkan array yang valuenya semua bertipe number.
  let n = array.length;
  let newnumber;

  do {
    newnumber = 0;
    for (let i = 1; i < n; i++) {
      if (array[i - 1] > array[i]) {
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        newnumber = i;
      }
    }
    n = newnumber;
  } while (n >= 1);

  return array;
}

function sortingByType(array) { // Agar lebih menarik, kamu diminta untuk membuat sorting array berdasarkan tipe data dari array yang diberikan.
  let numberarr = [];
  let stringarr = [];
  let booleanarr = [];
  let output = [];

  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    if (typeof obj === "number") {
      numberarr.push(obj);
    } else if (typeof obj === "string") {
      stringarr.push(obj);
    } else if (typeof obj === "boolean") {
      booleanarr.push(obj);
    }
  }
  // console.log(-45 < 1); // true
  let sortednumberarr = sorting(numberarr);

  // console.log("array" < "big"); // true
  let sortedstringarr = sorting(stringarr);

  // console.log(false < true); // true
  let sortedbooleanarr = sorting(booleanarr);

  if (
    sortednumberarr.length !== 0 ||
    sortedstringarr.length !== 0 ||
    sortedbooleanarr.length !== 0
  ) {
    output.push(sortednumberarr, sortedstringarr, sortedbooleanarr);
  }

  return output;
}

function sortAllClean(array = []) { // Selanjutnya kamu diminta untuk menghandle data yang tidak diinginkan seperti null, undefined, NaN dan array kosong ([]), dengan menghapus data aneh tersebut dari array sebelum disortir.
  let newarr = [];

  do {
    let obj = array.shift();
    if (obj) {
      newarr.push(obj);
    } else if (obj === false) {
      newarr.push(obj);
    }
  } while (array.length !== 0);

  let sorted = sortingByType(newarr);

  return sorted;
}


// ==================================================================================

// Instructor solution

function sorting(array) { // Mengurutkan array yang valuenya semua bertipe number.
  // your code here
  let temp = 0, sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        sorted = false;
      }
    }
  }

  return array;
}

function sortingByType(array) { // Agar lebih menarik, kamu diminta untuk membuat sorting array berdasarkan tipe data dari array yang diberikan.
  // your code here
  const typeInt = [], typeStr = [], typeBoolean = [], result = [];

  for (let i = 0; i < array.length; i++) {
    switch (typeof array[i]) {
      case 'number':
        typeInt.push(array[i]);
        break;
      case 'string':
        typeStr.push(array[i]);
        break;
      case 'boolean':
        typeBoolean.push(array[i]);
        break;
    }
  }

  if (typeInt.length) result.push(sorting(typeInt));
  if (typeStr.length) result.push(sorting(typeStr));
  if (typeBoolean.length) result.push(sorting(typeBoolean));

  return result;
}

function sortAllClean(array) { // Selanjutnya kamu diminta untuk menghandle data yang tidak diinginkan seperti null, undefined, NaN dan array kosong ([]), dengan menghapus data aneh tersebut dari array sebelum disortir.
  //your code here
  const cleanArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'number' && array[i] || typeof array[i] == 'string' || typeof array[i] == 'boolean') cleanArray.push(array[i]);
  }

  return sortingByType(cleanArray);
}

// ==================================================================================

let inputArrSorting = [2, 4, 6, 8, 2, 3];
let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];
let inputArrSortingClean = [undefined, null, 456, "def", NaN, [], true, 123, "bcd", false];

function sorting(array) { // // Mengurutkan array yang valuenya semua bertipe number.
  let tmp = '';
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }

  return array;
}

function sortingByType(array) {
  const result = [[], [], []];
  const sortedArray = sorting(array);

  for (let i = 0; i < sortedArray.length; i++) {
    const element = array[i];
    if (typeof(element) === 'number') {
      result[0].push(element);
    } else if (typeof(element) === 'string') {
      result[1].push(element);
    } else {
      result[2].push(element);
    }
  }

  return result;
}

function sortAllClean(array) {
  const result = [[], [], []];
  const sortedArray = sorting(array);

  for (let i = 0; i < sortedArray.length; i++) {
    const element = array[i];
    if (element === undefined || element === null || element.length === 0) {
      continue;
    }
    if (typeof(element) === 'number') {
      if (isNaN(element) === false) result[0].push(element);
    } else if (typeof(element) === 'string') {
      result[1].push(element);
    } else {
      result[2].push(element);
    }
  }

  return result;
}

//do not change the code below
// let inputArrSorting = [2, 4, 6, 8, 2, 3];
// let inputArrSortingType = [1, 3, "array", -45, true, false, "big"];
// let inputArrSortingClean = [undefined, null, 456, "def", NaN, [], true, 123, "bcd", false];
console.log(sorting(inputArrSorting));
console.log(sortingByType(inputArrSortingType));
console.log(sortAllClean(inputArrSortingClean));