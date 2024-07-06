// Primitive Datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// reference type or (Non-Primitive Datatype)

// Array, Objects, Functuins

const heros = ["shaktiman", "naagraj", "doga"];  //array
let myObj = {
    name: "shreenibas",
    age: 32,
}                                                //object

const myFunction = function(){
    console.log("Hello world");
}                                               //function

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//************************************************************************************************************




// Stack (promitive), Heap (non-primitive) 