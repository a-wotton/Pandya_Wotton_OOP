import { SingleFood } from "./foods.js";

const foodList = []

const apple = new SingleFood (
    "Apple", //name
    "Fruit", //food type
    180, //grams
    95, //calories
    0, //proteins
    25, //carbohydrates
    19, //sugars
    0, //saturated fat
    0, //trans fat
    "apple.jpg"
)
foodList.push(apple);

const egg = new SingleFood (
    "Egg", //name
    "Protein", //food type
    50, //grams
    70, //calories
    6, //proteins
    1, //carbohydrates
    0, //sugars
    1.5, //saturated fat
    0, //trans fat
    "egg.jpg"
)
foodList.push(egg);

const steak = new SingleFood (
    "Ribeye Steak", //name
    "Meat", //food type
    225, //grams
    660, //calories
    54, //proteins
    0, //carbohydrates
    0, //sugars
    23, //saturated fat
    4, //trans fat
    "steak.jpg"
)
foodList.push(steak);

const potato = new SingleFood (
    "Russet Potato", //name
    "Vegetable", //food type
    170, //grams
    164, //calories
    8, //proteins
    67, //carbohydrates
    2, //sugars
    0, //saturated fat
    0, //trans fat
    "potato.jpg"
)
foodList.push(potato);

// console.log(foodList);




const list = document.querySelector("#foodList");

foodList.forEach(food => {
    console.log(food);
  //Creates our content
  let img = document.createElement("img");
  let li = document.createElement("li");
  let h2 = document.createElement("h2");

  //Edits our content
  img.src = `images/${food.image}`;
  h2.textContent = food.name;

  //Places our content
   li.appendChild(img);
   li.appendChild(h2)
   list.appendChild(li);
})