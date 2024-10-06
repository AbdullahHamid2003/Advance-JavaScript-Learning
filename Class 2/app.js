// CIRCUITS

// and operator
// let a = false;
// let b = a && "abc";  ==> will not move forward

// let a = true;
// let c = a && "abc";  ==>  will save 'abc' in c 

// or operator
// let a = false;
// let b = a || "abc";  ==> will save 'abc' in b 

// let a = true;
// let c = a || "abc";  ==>  will save 'true' in c 



// ------spread Operators

// let obj = {
//     name: "abdullah",
//     age: 20,
// }

// let obj1 = {
//     ...obj,
//     institute: "SAIMS",
// }

// let arr = [1,2,3,4,5,6,7];
// let arr1 = [...arr, 'a', 'b', 'c'];




// -----pass by value

// let a = 123;
// a = 321;    ==>  a ki poori value change horahi hai
// console.log(a);



// -----rest operators
// function abc (...a){
//     console.log(a);
// }
// abc("ABC", "KJL", "MNO", "XYZ");



// ----- Destructuring in objects
// let obj = {
//     id: 1,
//     name: "Abdullah",
//     address: {
//         street: "ABC street",
//         city: "Karachi",
//         country: "Pakistan",
//         CoOrdinates: {
//             longitude: 12345,
//             latitude: 6789,
//         },
//     },
// };

// let {id, name , address} = obj;
// let {street, city, country, CoOrdinates} = obj.address;
// let {longitude,latitude} = obj.address.CoOrdinates;


// ----- Destructuring in Arrays
// let arr = [1,2,3,["A","B","C", [true, false]]];
// let [val1, , , val4] = arr;
// console.log(val4);
// let [a1] = arr[3][3];
// console.log(a1);


// ---- objects
// let obj = {
//     id: 1,
//     name: "Abdullah",
//     age: 20,
// };

// let allKeys = Object.keys(obj);
// let allValues = Object.values(obj);
// let allEntries = Object.entries(obj);
// Object.freeze(obj);
// obj.name = "Bilal";

// console.log(allKeys);
// console.log(allValues);
// console.log(allEntries);
// console.log(obj);