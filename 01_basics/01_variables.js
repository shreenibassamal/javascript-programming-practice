const accountId = 10086203
let accountEmail = "shreeenibassamal@gmail.com"
var accountPassword = "12345"
accountCity = "bhubaneswar"
let accountState;//you can use semicolumn may be not depends upon you .


// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

//we change the print method in next step to print all variable at one time by using  'console.table([])'.

//accountId = 123
// you cant change any variable  if you declare it as const datatype .

accountEmail = "shree@123"
accountPassword = "54321"
accountCity = "paradip"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/