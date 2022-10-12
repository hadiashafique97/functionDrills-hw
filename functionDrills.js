/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

// function sayHello() {
//   sayHello = 'hello world'
// console.log(sayHello)
// }
// sayHello()



/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

// const print = (message)=> {
//   console.log(`message: ${message}`)
// }
// print('This is the message')




// /*
//  * Prompt 3:
//  *
//  * Create a function called printMessage. This function should take a parameter
//  * called message. When invoked and passed a string, print 'Today's message
//  * is:', followed by the message passed in as a parameter.
//  */

// const printMessage =  function(message){
//   let newMessage = 'Todays message is :' + message
//  console.log(newMessage)
// }
// printMessage('I have no clue what functions are lol??')



// /*
//  * Prompt 4:
//  *
//  * Fix the following function:
//  */

// /** Starter Code */
// function giveMe(a){
//     return a *= 2
//   }
//   console.log(giveMe(25))
  


//   /*
//    * Prompt 5:
//    *
//    * Create a function called reverseMessage. This function should take
//    * a parameter called message. When invoked and passed a string, print the
//    * string in reverse. (hint: look up some ways of doing this.)
//    */
  // const reverseMessage = (message) => {
  //  console.log(message.reverse())
  // }

  // reverseMessage(['10','15','20','25'])
  // reverseMessage(['11','15','29','25']) // was just trying out different numbers
  // reverseMessage(['10','17','25'])
  

  
//   /*
//    * Prompt 6:
//    *
//    * Create a function called multiply that takes two parameters: a and b. When
//    * invoked, multiply a times b. If b an argument is not passed in for b, then
//    * double a (i.e. multiply it by two).
//    *
//    * Hint: use a default parameter.
//    */
// const multiplyTheVariables =(a,b) => {
//   //  return a *= b
// }
// console.log(multiplyTheVariables(7,8))

  
  
//   /*
//    * Prompt 7:
//    *
//    * Fix the following code. HINT: Think Objects :)
//    */
  
//   /** Starter Code */



//  function makePerson(firstname, lastname) {
 
//   let theName = {
//       firstname:  firstname,
//          lastname: lastname,
//       }
//       return theName
//   }

//   const zakk = makePerson('Zakk', 'F')
//   const jimmy = makePerson('Jimmy', 'B')
 
//   console.log(zakk)
//   console.log(jimmy)
  
  
//   /*
//    * Prompt 8:
//    *
//    * Write a function that returns an object. The object can be anything.
//    */
//   function greet(name = 'Stranger'){
//     console.log("Hello " + name)
//   }
//   greet('Hadia')
//   greet()
// //   /*

//    * Prompt 9:
//    *
//    * Write a function that returns an array. The array can be of anything.
//    */
   

// let myHomies = ["Shelby ", "Cynthia"]

// const addMeAndReturnHomies = (meAndMyHomies) =>{  // creating new variable within the param
// myHomies.push(meAndMyHomies)

// return myHomies
// }


// const theValueIGet = addMeAndReturnHomies(" Hadia ")
// console.log(theValueIGet)
  
//   /*
//    * Prompt 10:
//    *
//    * Write a function that, when called, adds a number passed in as a parameter to
//    * the sum variable below. Invoke your method a few times and then print the sum
//    */
  
// //   /** Starter Code */
  // let sum = 0
  
  


//   /*
//    * Prompt 11:
//    *
//    * Write a function that takes an array of number values and returns the sum.
//    * Test it out to make sure it works.
//    */
//   
// function sumThisArray(array){
//   let sum = 0
//   for (let index = 0; index < array.length; index += 1){ //it doesnt have to be i it can be any variable (placeholder)
//     sum += array[index]
//   }
//   console.log(sum)
// return sum
// }
// sumThisArray([25,10,15,20])
  
//   /*
//    * Prompt 12:
//    *
//    * Write a function that takes a string and returns an array of every word in
//    * the string.
//    */
//  var thisIsMyString = "Hello, I am just testing this"

// const returnString = (string) => {
//   return string.split(' ')

// }
//  console.log(returnString(thisIsMyString))

  
//   /*
//    * Prompt 13:
//    *
//    * How can you write a function so that this expression works? It should print
//    * the string "this works!"
//    */
  
//   /** Starter Code */

// const testFunc = () => console.log('this works!')
   
 
//   testFunc()
  
  
//   /*
//    * Prompt 14:
//    *
//    * Write a function that takes the add function below as a parameter and invokes
//    * it, passing in 2 and 4.
//    */
  
  /** Starter Code */
  // function add(a , b) {
  //   return a + b
  // }
  // function newAddition(a,b){
  //   return add(a,b)
  // } 
  // console.log(newAddition(2,4))

//   /*
//    * Prompt 15:
//    *
//    * Write a function that returns another function. Have the inner function print
//    * the string "hello world"
//    */

// const printHello = () => sayHello() // using code from prompt 1 

