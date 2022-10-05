// const fruits = ["Banana", "Berry", "Apple", "Mango", "Guanabana"];
// //                  0         1       2        3         4
// // console.log("My Fruits are:", fruits)
// // console.log("The first Fruit is:", fruits[0])
// // console.log("The second Fruit is:", fruits[1])

// // return the fruit at position X from the array
// function getFruit(index) {
//   return fruits[index];
// }

// console.log(`I have ${fruits.length} fruits in my list`)
// console.log(getFruit(0))
// console.log(getFruit(1))
// console.log(getFruit(2))
// console.log(getFruit(3))

// let playersNumbers = [12,33,44,55,33,99]

// console.log(playersNumbers[0] + playersNumbers[2])

let students = [
  {
    name: "bob",
    age: 24,
  },
  {
    name: "jennifer",
    age: 32,
  },
  {
    name: "lily",
    age: 55,
  },
];

//const firstStudent = students[0]

//console.log(firstStudent.name)
//console.log(students[1].name)


const {name,age} = students[0]
// console.log("First student's name is: ", name)
// console.log(`First student's name is: "${name}" and they are ${age} years old  🥰`)

const sentence = "Hello Boca Code"
// console.log(sentence.length)
const arrayOfLetters = sentence.split("")
//console.log(arrayOfLetters)
const arrayOfWords = sentence.split(" ")
// console.log(arrayOfWords)
// console.log(`There are ${arrayOfWords.length} number of words`)

let fruits = ["Banana", "Berry", "Apple", "Mango", "Guanabana"];
 console.log(fruits)
// fruits.push("Grapes")
// console.log(fruits)
// const oldFruit = fruits.pop()  // removes from the end (right)
// console.log(oldFruit)
// console.log(fruits)

// const oldFruit2 = fruits.shift() // Removes from the front (first, or left)
// console.log(oldFruit2)
// console.log(fruits)

// fruits.unshift("kiwi")
// fruits.unshift("fig")
// console.log(fruits)

// fruits = ["tomatoes",...fruits,"dragon fruit"] // spread operator allows add to add at the ends
// console.log(fruits)

// console.log(fruits.indexOf("mango"))

console.log(` my fruits are: ${fruits.join("🤙🏼 ")}`)
