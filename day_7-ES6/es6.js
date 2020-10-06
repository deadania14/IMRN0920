const golden = () => {
    console.log("this is golden!!")
}
console.log("-----------------No. 1-----------------");
golden();

const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(firstName + " " + lastName)
            return
        }
    }
}
console.log("-----------------No. 2-----------------");
newFunction("William", "Imoh").fullName()

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation } = newObject;
// Driver code
console.log("-----------------No. 3-----------------");
console.log(firstName, lastName, destination, occupation)

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

//Driver Code
console.log("-----------------No. 4-----------------");
console.log(combined)

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

// Driver Code
console.log("-----------------No. 5-----------------");
console.log(before)