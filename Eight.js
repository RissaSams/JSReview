const people = [
    { name: "Eric", age: 47},
    { name: "Brandy", age: 45},
    { name: "John", age: 35},
    { name: "Suzy", age: 16},
    { name: "Tony", age: 12},
    { name: "Frank", age: 22},
    { name: "Judy", age: 17}
];

// write a hof that logs everyone older than 18
people.forEach(person => (person.age>18)?console.log(person.age):null);
let over18 = people.filter(p => p.age > 18);
for (let i=0; i<over18.length; i++){
    console.log(over18[i].name);
}

// write a hof that give total age of everyone in people array
let total = 0;
people.forEach(person => total += person.age);
console.log(total);

// write a hof that creates a new array of just kids (>18)
let kids = people.filter(person => person.age < 18);
kids.forEach(kid => console.log(kid));