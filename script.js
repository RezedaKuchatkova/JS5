

const description = {
    1: 'Задание 1',
    2: 'Задание 2',
    3: 'Задание 3'
}

// Задача 1
const nums = [5, 2, 4]
nums[99] = 3
let squares = []

nums.forEach(el => {
    if (el) {
        squares.push(el ** 2)
    }
})


//Задача 2

const list = [
    { product: "Orange ispaniol", price: 600 },
    { product: "Cherry", price: 80 },
    { product: "Mango red", price: 45 },
    { product: "Banana", price: 9 },
    { product: "Mango", price: 25 },
    { product: "Kiwi", price: 19 },
    { product: "Pear", price: 10 },
    { product: "Apple", price: 8 },
    { product: "Strawberry", price: 13 },
    { product: "Watermelon", price: 13 },
    { product: "Melon", price: 14 },
    { product: "Apricot", price: 76 },
]

list.sort((a, b) => {
    return b.price - a.price
})

let resList = `Максимальная цена: ${list[0].product} - ${list[0].price} руб`



// Задача 3

let products = [
    
    {product: "морковка", price: 11}, 
    {product: "картошка", price: 18}, 
    {product: "капуста", price: 14}, 
    {product: "помидор", price: 25}, 
    {product: "салат", price: 21}, 
    {product: "клубника", price: 32},
    {product: "кукуруза", price: 27},
    {product: "яблоко", price: 16}, 
    {product: "редиска", price: 8}, 
    {product: "малина", price: 15},
    {product: "огурцы", price: 18}
];

let aLenght = getRandomNum(10, 30), 
    prod = null,
    rIndex = -1,
    bIndex = -1,
    basket = [];

for (let i = 0; i < aLenght; i++){
    rIndex = getRandomNum(0, products.length - 1);
    prod = products[rIndex];
    bIndex = isProductInBasket(basket, prod);
    if (bIndex < 0){
        prod.cnt = 1;
        basket.push(prod);
    } else {
        basket[bIndex].cnt += 1;
    }
}

console.log(basket);

let bSumma = 0;
bSumma = basket.reduce(function(acc, item){ 
    return item.price * item.cnt + acc;
}, 0);

console.log(`Сумма = ${bSumma}`);

function getRandomNum(min = 0, max = 10){
    return Math.round(Math.random() * (max - min) + min);
}

function isProductInBasket(prods, prod){
    for (let i = 0; i < prods.length; i++){
        if (prods[i].product === prod.product )
            return i;
    }
    return -1;
}