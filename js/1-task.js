const fruits =['Mango', 'Coconut', 'Pineapple', 'Kivi'];
console.log(fruits.join(","))

let result = "";
for (let i = 0; i < fruits.length; i ++) {
    result += fruits[i];
    if (i !== fruits.length -1) {
        result += ","
    }
}
console.log(result)