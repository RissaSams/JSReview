let a = 5;
let b = 10;

a++; // a = 6 / b = 10
b -= a++; // a = 7 / b = 4
console.log(++b - a++); // a = 8 / b = 5
console.log(a);
console.log(b);

/*
-2
8
5
*/

let x = 3;
let t = "3";

if (t == x) {
    x++;
} else {
    console.log(++x)
}
console.log(x)

let speech = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived" +
    " in Liberty, and dedicated tot he propostition that all men are created equal."

console.log(speech.indexOf('y'));

console.log(speech.split(' ').length);

// write a line of code that will get the word 'fathers' from the string
console.log(speech.split(' ')[7]);
console.log(speech.substr(speech.indexOf('fathers'), 7));
console.log(speech.substring(speech.indexOf('f'), speech.indexOf('ers') + 4));
console.log(speech.slice(35, 42));

let fruits = ['blueberry', 'apple', 'pear', 'orange', 'grapefruit', 'grapes', 'peach'];
/* give code that will produce:

blueberry
pear
grapefruit
peach

*/
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[4]);
console.log(fruits[6]);
console.log('-------------------------------');
for (let i = 0; i < fruits.length; i++) {
    if (i % 2 == 0) {
        console.log(fruits[i]);
    }
}
console.log('-------------------------------');
for (let i = 0; i < fruits.length; i += 2) {
    console.log

    function totalArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
}

// write code that will call this array and send it the numbers 2,4,6,8,10
let n = [2, 4, 6, 8, 10];

let ntest = totalArray(n);
console.log(ntest);
console.log('----------------------------');

console.log(totalArray([2, 4, 6, 8, 10]));

let m = "";
for (let i=1; i<=7; i++){
    for (let j=1; j<=i; j++){
        m+=i;
    }
    m+='\n';
}
console.log(m);

// what does this code produce?
/*
1
22
333
4444
55555
666666
7777777
*/

