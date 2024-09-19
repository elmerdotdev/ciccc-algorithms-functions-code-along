// const greeting = function(firstname, lastname, age) {
//   console.log(`Hello ${firstname} ${lastname}. You are ${age} years old.`)
// }

// greeting("John", "Smith", 20)
// greeting("Joe", "Doe", 10)


// add(10, 5, 3)

// function add(a, b, c) {
//   const sum = a + b + c
//   console.log(`The sum of ${a} and ${b} and ${c} equals to ${sum}`)
// }

// const add = function(a, b, c) {
//   const sum = a + b + c
//   console.log(`The sum of ${a} and ${b} and ${c} equals to ${sum}`)
// }

// const multiply = function(num1, num2) {
//   if (num1 <= 10) {
//     console.log("Enter a higher number than 10")
//   } else {
//     const product = num1 * num2
//     console.log(`The product of ${num1} and ${num2} is ${product}`)
//   }
// }

// multiply(25, 2)


// const subtract = function(a, b) {
//   const difference = a - b
//   return difference
// }

// const answer = subtract(10, 3)
// // console.log(answer)


const greeting = function() {
  return "Hello World!"
}

const message = greeting()
console.log(message)


function add(a, b) {
  const sum = a + b
  console.log(sum) // put this on the terminal
  return sum
}

function subtract(a, b) {
  let city = "Vancouver"
  const difference = a - b
  return difference
}

const sum = add(5, 5) // sum
const difference = subtract(sum, 3)
console.log(difference)


// function checkWeather(temp) {
//   let weather;
//   const city = "Vancouver"
//   if (temp > 30) {
//     weather = "Wear a shirt"
//   } else {
//     weather = "Wear a jacket"
//   }
//   return weather
// }

// const weather = checkWeather(25)
// console.log(weather)

//(0°C × 9/5) + 32 C->F
//(32°F − 32) × 5/9 = 0°C F->C


function convertTemp(deg, temp) {
  if (temp === "C") {
    return (deg * (9 / 5)) + 32
  } else if (temp === "F") {
    return (deg - 32) * (5 / 9)
  } else {
    return "Invalid temperature"
  }
}

// const farenheight = convertTemp(30, "C")
// console.log(`${farenheight}°F`)
// const celsius = convertTemp(100, "F")
// console.log(`${celsius}°C`)
// const conversion = convertTemp(50, "C")
// console.log(`${conversion}°F`)

const sayMeow = function(times) {
  let message = "";
  for (let i = 1; i <= times; i++) {
    message += "meow..."
  }
  return message
}

function helloCat(func){
  // will wait for func to finish running before returning
  const message = `My cat says ${func(4)}`
  return message
}

// const catGreeting = helloCat(sayMeow)
// console.log(catGreeting)


function addNumbers(a, b) {
  return a + b
}

const addNumbers2 = function(a, b) {
  return a + b
}

const addNumbers3 = (a, b) => a + b

console.log(addNumbers3(5, 3)) // 8




sayGoodnight()

function sayGoodnight() {
  console.log(`Goodnight my friend`)
}


let firstName = "John"

function changeName() {
  let firstName; // shadow of firstName = Jane
  firstName = "Jane"
}

changeName() // you need to call the func to trigger it

console.log(firstName)


let age = 0

function addAge() {
  let age = 40
  age += 30 // 70
  return age
}

const newAge = addAge()

console.log(newAge)