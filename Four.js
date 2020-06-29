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