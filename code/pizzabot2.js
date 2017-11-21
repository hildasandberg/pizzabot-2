//Put your Javscript code here:
const pizzas=[
  {name: "Vegetarian Pizza", price: 95, rating: [] } ,
  {name: "Hawaiian Pizza", price: 75, rating: [] } ,
  {name: "Pepperoni Pizza", price: 90, rating: [] } ]
pizzas.sort()

// Print in DOM
const pizzaMeny = `Hey! Happy to serve your pizza. On our menu we have ${pizzas.length} number of pizzas. 1. ${pizzas[0].name} ${pizzas[0].price}  kr. 2. ${pizzas[1].name} ${pizzas[1].price} kr.  3. ${pizzas[1].name} ${pizzas[1].price} kr `
document.getElementById("meny").innerHTML = pizzaMeny
document.getElementById("piz1").innerHTML = pizzas[0].name
document.getElementById("piz2").innerHTML = pizzas[1].name
document.getElementById("piz3").innerHTML = pizzas[2].name

// checkOrderName() which should take the orderName variable as an argument and return true or false if the pizza is on the menu or not.
const checkOrderName = (orderName) => {
  orderName=document.getElementById("order").value
  document.getElementById("sort").innerHTML = "How many of " + orderName + " do you want?"
  if (orderName === pizzas[0].name) {
    pizzaPrice = pizzas[0].price
    pizzaIndex = 0
    return true
  } else if (orderName === pizzas[1].name) {
    pizzaPrice = pizzas[1].price
    pizzaIndex = 1
    return true
  } else if (orderName === pizzas[2].name) {
    pizzaPrice = pizzas[2].price
    pizzaIndex = 2
    return true
  } else {
    alert("We dont have that pizza on the meny")
    exit()
  }
}

// totalCost() which takes orderQuantity as an argument and returns the total cost for the order.
// const orderTotal = pizzaPrice * orderQuantity
const totalCost=(quant)=> {
  return quant*pizzaPrice
}

// cookingTime takes orderQuantity and returns the number of minutes it will take to finish the order.
const cookingTime = (quant) => {
  if (quant < 3) {
    return 10
  } else if (quant >= 3 && quant <= 5) {
    return 15
  } else if (quant >=6) {
    return 20
  }
}

const CalculateTotalCostAndTime = () => {
  orderQuantity=document.getElementById("orderQuantity").value
  orderName=document.getElementById("order").value
  const orderTotal=totalCost(orderQuantity)
  const Time=cookingTime(orderQuantity)
  document.getElementById("delivery").innerHTML = "Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " + Time + " minutes"
}

const updateRating = (newRating) => {
  newRating=document.getElementById("rating").value
  if (newRating => 1 && newRating <= 5) {
    pizzas[pizzaIndex].rating.push(newRating)
    console.log(newRating)
  } else {
    exit()
  }
}

// Stretch goals
const stretchGoals = () => {

  const wiki = "Hawaiian pizza (also known as Pizza Hawaii) is a pizza topped with tomato sauce, cheese, pineapple, and Canadian bacon or ham. Some versions may include peppers, mushrooms, or bacon.[citation needed] Pineapple as a pizza topping divides public opinion: Hawaiian was the most popular pizza in Australia in 1999, accounting for 15% of pizza sales,[1] and a 2015 review of independent UK takeaways operating through Just Eat found the Hawaiian pizza to be the most commonly available.[2] However, a 2016 survey of US adults had pineapple in the top three least favourite pizza toppings, behind anchovies and mushrooms.[3]"

  alert(wiki)

  // Count the number of words in the string
  const WordCount = (str) => {
    return str.split(" ").length
  }

  const antalOrd=WordCount(wiki)
  alert("The number of words in the paragraph is: " + antalOrd)

  // Count the number pineapple in the string
  const WordMatch = (str) => {
    return str.match(/pineapple/gi).length
  }

  const mentioned=WordMatch(wiki)
  alert("Pinapple is mentioned " + mentioned + " times in the text")
}
