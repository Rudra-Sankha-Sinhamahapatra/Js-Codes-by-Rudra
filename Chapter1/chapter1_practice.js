//01.create a variable of type string and try to add a number to it

let a="Harry"
let b=6
console.log(a+b)


//02. use typeof operator to find the datatype of the string in last question(01)
console.log(typeof(a+b))


//03.
//create a const object in javascript.Can you change it to hold a number later?

const a1 ={
  name:"Rudra",
  section:"b-7",
  isPrincipal:false,
  
}
//a1=45
 //04.Try to add a new key to the const object in problem 3 were you able to do it?

a1['friend']="Subham"
a1['name']="Lavish"
console.log(a1)

//05.Write a Js program to create a word-meaning dictionary of 5 words
console.log("Here's our 5 word dictionary")
const dict={
appreciate:"recognize the full worth of",
  jamboree:"any large gathering with a partylike atmosphere",
  luminaria:"a Christmas lantern consisting of a lighted candle set in sand inside a paper bag",
  lebkuchen:"a hard, chewy or brittle Christmas cookie, usually flavored with honey and spices and containing nuts and citron.",
  brume:"mist,fog",
  
}
console.log(dict)