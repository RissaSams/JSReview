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