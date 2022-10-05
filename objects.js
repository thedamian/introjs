const person = {
    name: "Damian",
    age: 49,
    address: "1 Boca Code Drive",
    address2: "1 Boca Code Drive",
    address3: "1 Boca Code Drive",
    address4: "1 Boca Code Drive",
} 

// console.log("person is called: ",person.name)
// console.log("person is called: ",person["name"])

// console.log(`my name is ${person.name} and
// I'm this old: ${person.age}`)

// const name = person.name
// const age = person.age
const {name,age} = person
console.log(`my name is ${name} and

I'm this old: ${age}`)