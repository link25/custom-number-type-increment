const myNumber = 123;
function increment(number) {
  	let array = number.toString().split("");//stringify the number, then make each digit an item in an array
  	return array.map(x => parseInt(x));//convert all the items back into numbers
  
}
var myArray = increment(myNumber);

console.log(myArray);

 for (var i = 0; i < myArray.length; i++){
    myArray[i] += 1;
}
console.log(myArray);
