let person = {
    name: "Daniel",
    age: 27,
    eyeColor: "Brown",
    country: "Netherlands",
    updateAge: function() {
        return ++person.age
    }
}

console.log(person)

person.updateAge()
console.log(person.age)

// examples with spongebob

const person01 = {
    firstName: "Spongebob",
    lastName: "SquarePants", 
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log ("Helloo")
    },
    eat: function() {
        console.log("I am eating a Krabby Patty")
    }
}

const person02 = {
    firstName: "Patrick",
    lastName: "Star", 
    age: 42,
    isEmployed: false,
    sayHello: function(){
        console.log ("Helloo")
    },
    eat: function() {
        console.log("I am eating roast beef, chicken and pizza")
    }
}

console.log(person01)
console.log(person02)

person01.eat()
person02.eat()

// array objects 

const fruits = [{name: "Apple", color: "Red", calories: 95},
                {name: "Orange", color: "Orange",calories: 45},
                {name: "Banana", color: "Yellow",calories: 105},
                {name: "Pineappçe", color: "Yellow",calories: 159},
                {name: "coconut", color: "White",calories: 37}
]

fruits.push({name: "coconut", color: "White",calories: 37})
fruits.pop()
fruits.splice(0,2)

console.log(fruits[0].calories); // aqui vai pegar a posição [0,1,2,3] e 
// e o metodo

console.log(fruits)

fruits.forEach(fruit => console.log(fruit.name))

const fruitName = fruits.map(fruit => fruit.name)

const fruitColors = fruits.map(fruit => fruit.color)

console.log(fruitName)
console.log(fruitColors)

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")

console.log(yellowFruits)

