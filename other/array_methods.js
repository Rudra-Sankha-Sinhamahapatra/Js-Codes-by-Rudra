
/*
An array method is a built-in function that can be applied to an array to perform a specific operation. Some of the most common array methods in JavaScript include:

push() - adds one or more elements to the end of an array and returns the new length of the array.
Example:
*/
//1.
let fruits = ['apple', 'banana'];
fruits.push('orange', 'mango');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango']

/*
pop() - removes the last element from an array and returns that element.
Example:
*/
//2.
let fruits19 = ['apple', 'banana', 'orange', 'mango'];
let lastFruit = fruits19.pop();
console.log(lastFruit); // Output: 'mango'
console.log(fruits19); // Output: ['apple', 'banana', 'orange']
/*
shift() - removes the first element from an array and returns that element.
Example:
*/
//3.
let fruits20 = ['apple', 'banana', 'orange', 'mango'];
let firstFruit = fruits20.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits20); // Output: ['banana', 'orange', 'mango']
/*
unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
Example:
*/
//4.
let fruits21 = ['banana', 'orange', 'mango'];
fruits21.unshift('apple');
console.log(fruits21); // Output: ['apple', 'banana', 'orange', 'mango']
/*
concat() - returns a new array that combines two or more arrays.
Example:
*/
//5.
let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'mango'];
let allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'mango']
/*
slice() - returns a new array that contains a portion of an existing array.
Example:
*/
//6.
let fruits22 = ['apple', 'banana', 'orange', 'mango'];
let citrusFruits = fruits22.slice(1, 3);
console.log(citrusFruits); // Output: ['banana', 'orange']
//These are just a few examples of array methods in JavaScript. There are many more, each designed to perform a specific operation on arrays. I hope this helps!



