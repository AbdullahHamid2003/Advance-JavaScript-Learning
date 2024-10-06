// =========== Functions =========

// function abc(a){   // ==> Higher Order Function: jis function k andr doosra function call horaha ho us function ko higher order kehte hain. 
//     console.log(a);
// }
// function xyz(){   // ==> Callback Function: abc chalega tw xyz call hoga isliay isko callback function kehte hain
//     return "abdullah";
// }
// abc(xyz());

// function abc(){  //==> Higher order Function: jis function k andr koi or function return horaha ho.
//     console.log("ABC");
//     return function(){
//         console.log("Inside ABC");
//     }
// }
//  abc()(); // ==> abc ki jaga return hone wala function ajaega or phir wo wapis call hojaega isliay aik or dafa round bracket() lagae hain.


// ======= lexical scoping =======

// let a = true;

// function abc(){
//     let a = 123
//     if (true){
//         console.log(a);
//     }
// }
// abc();


// ===== Default perameters =====

// function abc(a = 0){
//     let b = 300 -a ;
//     console.log(b);
// }
//     abc(20);
//     abc(40);
//     abc(60);
//     abc("ABC");   ==> is case main a ki default value set hojaegi jo hamne parameter main di hogi



// ===== Arrow Functions ======

// let abc = () => {           // with round bracket only
//     console.log("Abdullah");
// }
// abc();

// let abc = (a) => {         // With parameters
//     console.log(a);
// }
// abc("Abdullah");

// let abc = a => {        // without round brackets
//   console.log(a);
// }
// abc(10);


// let abc  =  a => "Abdullah"  // is case main curly bracket nahi lagaye tw isliay agay jo bhi value likhi hui hogi wo direct return hojaegi.
// let b = abc();
// console.log(b);





// ========= Array Functions =========

let arr = [
    {
        id: 1,
        name: "Abdullah",
        isApproved: true,
    },
    {
        id: 2,
        name: "Sameer",
        isApproved: true,
    },
    {
        id: 3,
        name: "Umair",
        isApproved: false,
    },
    {
        id: 4,
        name: "Ali",
        isApproved: true,
    },
    {
        id: 5,
        name: "Noman",
        isApproved: false,
    },
];

// --Map()   ==> one by one iteration return karta hai or lazmi poora array return karta hai
// let arr2 = arr.map((x) => {
//     return x.id;
// });
// console.log(arr2);


// --filter()  ==> array main se jo bhi specific value chahiye ho wo lakr deta hai but poora object return karta hai.
// let arr2 = arr.map((x) => {
//     if(x.isApproved){
//     return x;
//     }
// });
// console.log(arr2);

// let arr2 = arr.filter((x) => x.isApproved).map((x) => x.address); //filter k andr map chalaya hai.
// console.log(arr2);