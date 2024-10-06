// let a = "abc";
// a = 123; ==> ye error isliay deraha hai kionke is main ham sirf same data type assign kar skte hain
// a = "xyz";

// let st = false;
// st = 123;

// let arr = [1,2,3,4,5];
// arr.push("a");
// arr.push(6);

// let arr = ["abc",1,2,3];
// arr.push("xyz");
// arr.push(6);

// let abc;
// abc = "Abdullah";
// abc = 123;
// abc = true;
// abc = [];
// abc = {};

// let obj = {
//     id: 1,
//     name: "Abdullah",
// }
// obj.age = 20;  // error dega kionke age object main hai hi nahi
// obj.name = 10; // error
// obj.name = "Bilal";


// Types

// let a:string = "abc";
// a = 123 // error
// a = "xyz";


// let a:number = 20;
// a = "xyz" // error
// a = 30;


// let a:boolean = true;
// a = 123 // error
// a = false;


// let numsArray:number[] = [1,2,3,4,5];
// let numsArray:(number | string)[] = ["abc","xyz",1,2,3,4,5];


// let objtype: {
//     id:number,
//     name: string,
//     isAdmin: boolean
// }

// objtype = {
//     id:1,
//     name: "Abdullah",
//     isAdmin: true,
// }


// let arrOfObj:{
//     id:number,
//     name:string
// } [] = [
//     {
//         id:1,
//         name:"Abdullah"
//     },
//     {
//         id:2,
//         name:"Bilal",
//     },
// ]

// let arrInObj: {
//     id:number,
//     name:string,
//     items:(string | number | boolean)[],
// } = {
//     id:1,
//     name: "Abdullah",
//     items: ["abc",2,true],
// }


// Custom types

// type myObj = {
//     id: number,
//     name: string,
//     age: number,
//     isAdmin: boolean,
// }

// let obj: myObj = {
//     id: 1,
//     name: "Abdullah",
//     age: 20,
//     isAdmin: false,
// }

// let arr: myObj[] = [
//     {
//         id: 1,
//         name: "Abdullah",
//         age: 20,
//         isAdmin: false,
//     },
//     {
//         id: 2,
//         name: "Sameer",
//         age: 20,
//         isAdmin: true,
//     },
//     {
//         id: 3,
//         name: "Bilal",
//         age: 20,
//         isAdmin: false,
//     },
// ]


// type userArr = myObj[];

// let arr: userArr = [
//     {
//         id: 3,
//         name: "Bilal",
//         age: 20,
//         isAdmin: false,
//     },
//     {
//         id: 3,
//         name: "Bilal",
//         age: 20,
//         isAdmin: false,
//     },
//     {
//         id: 3,
//         name: "Bilal",
//         age: 20,
//         isAdmin: false,
//     },
// ]


// type config = {
//     id:number,
//     name:string,
//     theme: "dark" | "light",
// }

// let obj:config = {
//     id:1,
//     name: "Abdullah",
//     theme: "light",
// }



// ====  INTERFACES ====

// interface user {
//     id: number,
//     name: string,
//     age:number,
//     isAdmin: boolean
// }

// interface Abdullah {
//     DOB: string,
//     Address: string,
// }

// interface Emp extends user,Abdullah{ 
//     compnayName: string,
//     joiningDate: Date,
//     salary: number,
// }

// let obj:Emp ={
//     id: 1,
//     name: "Abdullah",
//     age: 20,
//     isAdmin: true,
//     DOB: "26-oct-2003",
//     Address: "ABC street Gulshan Iqbal Karachi",
//     compnayName: "Footwear Pros",
//     joiningDate: new Date(),
//     salary: 50000,
// }


// interface user {
//     id: number,
//     name: string,
//     age:number,
// }

// interface Emp <T>{
//     compnayName: string,
//     joiningDate: Date,
//     extras:T[],
// }

// let obj:Emp<number>={
//     compnayName: "Footwear Pros",
//     joiningDate: new Date(),
//     extras: [1,2,3,4,5]
// }
