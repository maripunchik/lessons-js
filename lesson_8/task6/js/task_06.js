// cуворий режим
"use strict"

// =================================================================

//   Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

if (confirm("Почати тестування?")) {
const amountOfMoney = parseInt(prompt(`Введіть скільки у Вас грошей`, `100`))
let productsPrices = [100, 50, 8.7, 54.2,87,120,95,64.7,74,32]
let productsNames = ['Масло','Картопля','Сіль','Печиво','Банани','Морозиво','Персики','Сир','Помідори','Яблука']
function getProductsThatUserCanBuy(prices, names, money) {
const userCanBuy = []
 for (let i = 0; i < prices.length; i++) {
   if (money >= prices[i]) 
		userCanBuy.push(names[i]);
 }
 return userCanBuy;
}
function writePriceList(names, prices) {
  let priceList = [];
  for (let i = 0; i < names.length; i++) {
    priceList.push(`${names[i]}: ${prices[i]} грн.<br>`);
  }
  return priceList
}
const userCanBuy = getProductsThatUserCanBuy(productsPrices, productsNames, amountOfMoney)
const priceList = writePriceList(productsNames, productsPrices)

document.writeln(
  `<div class="task__subtitle task__subtitle--green">Список товарів:<br> ${priceList}<br> Маючи наступну кількість грошей: ${amountOfMoney} грн, користувач може собі дозволити такі товари: ${userCanBuy}</div>`
);
}

// =================================================================