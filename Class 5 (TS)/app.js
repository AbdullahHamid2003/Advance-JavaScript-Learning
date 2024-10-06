// let Present = new Promise((resolve,reject) => {
//     let Abdullah = true;
//     let Bilal = true;
//     let abdullahSal = 30000;
//     let bilalSal = 45000;
//     if(Abdullah && Bilal){
//         resolve("Both are Present");
//     } 
//     else if(abdullahSal <= bilalSal){
//         resolve("Bilal is Senior");
//     }
//     else{
//         reject("May be one or both are not poren")
//     }
// })
// .then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })

// let abc = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (a == b) {
//             setTimeout(() => {
//                 resolve("Success");
//             }, 5000)
//         }
//         else{
//             reject("Error")
//         }
//     });
// };
// let xyz = async () => {
//     await abc(50,50).then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     console.log("Abdullah")
// };
// xyz();
