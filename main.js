// const a = [4, 8, 10, 6, 12, 1, 1, 2, 5];
// const c = [
//   { name: "ivan", age: 14 },
//   { name: "anna", age: 30 },
//   { name: "nick", age: 23 },
//   { name: "luna", age: 21 },
//   { name: "serg", age: 22 },
// ];

// // every
// let b = c.some((item) => {
//   if (item.age < 16) {
//     return true;
//   }
// });
// console.log(b);

// let a1 = [22, 33, 44, 55, 66, 77, 88];
// let a1_from = 7;
// let a1_to = 100;
// let f1 = a1.every((item) => {
//   if (item >= a1_from && item <= a1_to) {
//     return true;
//   }
// });
// console.log(f1);

// flat
// let a = [3, [6, 7], [[[11, 12], 10], 8], 5];
// let b = a.flat(3);
let a = [3, [4, 5]];
a[100] = 100;
let b = a.flat(); //1
console.log(a);
console.log(b);

//fill
let c = [1, 1, 1, 1, 1, 1, 1];
let d = c.fill(2, 0, 4);
console.log(c);
console.log(d);

//keys
let e = [2, 4, [4, 5]];
let r = { hi: 3, hello: 5 };
console.log(Object.keys(e));
console.log(Object.keys(r));
