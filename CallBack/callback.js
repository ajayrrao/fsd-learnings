// //without call back

// console.log("First");
// getData();
// console.log("Third");

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data, "data2");
// }

//with call back

// firstFunction(function () {
//   secondFunction(function () {
//     thirdFunction();
//   });
// });

// function firstFunction(cb) {
//   console.log("First Call Back");
//   cb();
// }

// async function secondFunction(cb) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data, "Second Function");
//   cb();
// }

// function thirdFunction() {
//   console.log("Third Function");
// }

// with promise
function firstFunctionWithPromise() {
  console.log("First Function with Promise");
}

function secondFunctionWithPromise() {
  return new Promise(async function (resolve, reject) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data, "Second Function with Promise");
      resolve(data);
    } catch (error) {
      reject("error");
    }
  });
}

function thirdFunctionPromise() {
  console.log("Third Function with Promose");
}

async function executePromise() {
  firstFunctionWithPromise();
  await secondFunctionWithPromise();
  thirdFunctionPromise();
}

executePromise();

// async function executeWithoutAwait() {
//   firstFunctionWithPromise();
//   secondFunctionWithPromise().then(() => {
//     thirdFunctionPromise();
//   });
// }

// executeWithoutAwait();
