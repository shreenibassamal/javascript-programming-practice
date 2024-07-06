console.log(2 > 1);
console.log(2 >= 1);
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);
console.log();


//comparision of null value
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//The reason is that equality check == and comparision <, >, <=, >= works differenty .
//Comparision convert null to a number, treating it as 0 .
//Thats why (3) null >= 0 is true and (1)null > 0 is false .


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >=0);

// ===
console.log(2===2);
console.log("2"===2);