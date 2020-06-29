let a = 5;
let b = 10;

a++;        // a = 6 / b = 10
b -= a++;   // a = 7 / b = 4
console.log(++b - a++);     // a = 8 / b = 5
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