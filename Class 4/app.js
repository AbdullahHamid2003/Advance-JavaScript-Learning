// let arr = [
//     {
//         brand: "Samsung",
//         model: "A30",
//         price: "40000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
      
//     },
//     {
//         brand: "Samsung",
//         model: "A10",
//         price: "40000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "128gb",
    
//     },
//     {
//         brand: "Samsung",
//         model: "A20",
//         price: "40000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "128gb",
     
//     },
//     {
//         brand: "Vivo",
//         model: "Y20",
//         price: "20000",
//         camera: "40px",
//         ram: "2gb",
//         rom : "32gb",
        
//     },
//     {
//         brand: "Vivo",
//         model: "Y11",
//         price: "20000",
//         camera: "40px",
//         ram: "3gb",
//         rom : "32gb",
       
//     },
//     {
//         brand: "Vivo",
//         model: "Y15",
//         price: "30000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "64gb",
      
//     },
//     {
//         brand: "Motorola",
//         model: "123",
//         price: "5000",
//         camera: "2px",
//         ram: "2gb",
//         rom : "32gb",
//     }, 
//     {
//         brand: "Iphone",
//         model: "12",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
       
//     },
//     {
//         brand: "Iphone",
//         model: "13",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
   
//     },
//     {
//         brand: "Iphone",
//         model: "X",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
      
//     },
// ]

// let selectBrand = document.getElementById("brand");
// let selectModel = document.getElementById("model");

// let brands = arr.map((x) => x.brand);
// brands = [...new Set(brands)];
// console.log(brands);

// selectBrand.innerHTML += brands.map((x) => `<option value="${x}">${x}</option>`);

// let brandSelect = () => {
//     let selectedBrand = selectBrand.value;
//     // console.log(brandSelect);
//     let models = arr.filter((x) => x.brand == selectedBrand);
//     // console.log(models);
//     selectModel.innerHTML = "";
//     selectModel.innerHTML += models.map((x) => `<option value="${x.model}">${x.model}</option>`);
// }





let arr = [
    {
        id: 1,
        name: "Abdullah",
        isApproved: true,
        amount: 100,
        isSelected: true,
    },
    {
        id: 2,
        name: "Sameer",
        isApproved: true,
        amount: 150,
        isSelected: true,
    },
    {
        id: 3,
        name: "Umair",
        isApproved: false,
        amount: 200,
        isSelected: true,
    },
    {
        id: 4,
        name: "Ali",
        isApproved: true,
        amount: 250,
        isSelected: true,
    },
    {
        id: 5,
        name: "Noman",
        isApproved: false,
        amount: 300,
        isSelected: true,
    },
];

// -- find()

// let obj = arr.find((x) => x.id == 5);
// console.log(obj);


// -- reduce()

// let sum = arr.reduce((x,y) => {
//     return x + y.amount;
// }, 0);
// console.log(sum);

// -- flat()

// let arr2 = [[1],2,3,4,[[5],[6]]];
// let arr3 = arr2.flat(Infinity);
// console.log(arr3);

//-- max()
// let maxVal = Math.max(...arr3);
// console.log(maxVal);

//--some()  ==>agr array main se aik bhi select true hua tw ye true return krdega wrna false
// let anyObjSelected = arr.some((x) => x.isSelected); 
// console.log(anyObjSelected);

//--every()  ==> agr array main saray select true huay tw ye true return krdega wrna false
// let everyObjSelected = arr.every((x) => x.isSelected); 
// console.log(everyObjSelected);

//--find() ==> for finding a single object
// let obj = arr.find((X) => X.id == 3);
// console.log(obj);

// -- findIndex()
// let a = arr.findIndex((x) => x.id == 4);
// console.log(a);



