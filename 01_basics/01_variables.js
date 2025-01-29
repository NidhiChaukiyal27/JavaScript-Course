const accountId = 12234
let accountEmail = "nidhi@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;  //undefined


// accountId = 2  // not alllowed


accountEmail = "nidhi@micro.com"
accountPassword = "270904"
accountCity = "Bengaluru"


console.log(accountId);



/*
Prefer not to use scope
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
