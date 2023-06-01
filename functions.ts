// function addTwo(num){
//     return num + 2
// }

// console.log(addTwo(4))

// //new functions with defalt argument value
// //fat arrow functions

// let loginUser = (name : string, password : string , isPaid : boolean = false) =>{
//     console.log("Hello");
// }

// loginUser("Sundaram","Suunn")

// set return type of our function

const getHello = (s : string) : string =>{
    return "";

    // in this we set the return type string as when we return the value
}


//arrsy in typescript function
const heros= ["a","b","c"];

heros.map((hero) : string => {
    return `hero is ${heros}`;

    // in this we define the type of return type we needed , here the return is heros string : 
})
export {}