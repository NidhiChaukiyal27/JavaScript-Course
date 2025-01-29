// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); --->true
// console.log("02" > 1);---->true

// console.log(null > 0); --->false
// console.log(null == 0);--->false
// console.log(null >= 0);----->true

//The reason is that an equality check == and comparisons > < >= <= work differently 
//comparisons convert null to a number, treating it as 0
//that's why null >= 0 is true and null > 0 is false 

// console.log(undefined > 0); //--->false
// console.log(undefined == 0);//--->false
// console.log(undefined > 0);//----->false

// ===  strict check means checks datatypes also
console.log("2" === 2);




