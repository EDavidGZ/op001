let name = "Efren"
let firstName = "Garza";

let student = "Estudiante: " + name + " " + firstName;

let studentMay = student.toUpperCase()
let studentMin = student.toLowerCase()
let numString = student.length
let starString = student.slice(0,1)
let endString = student.slice(-1)
let notSlice  = student.split(" ").join("")
let incluString = student.includes(name)
console.log(incluString)