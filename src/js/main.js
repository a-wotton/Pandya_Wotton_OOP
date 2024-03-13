import { SingleFood } from "./foods.js";

const foodList = [];

const apple = new SingleFood(
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
);
foodList.push(apple);

const egg = new SingleFood(
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
);
foodList.push(egg);

const steak = new SingleFood(
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
);
foodList.push(steak);

const potato = new SingleFood(
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
);
foodList.push(potato);

const avacado = new SingleFood(
    "Avacado", //name
    "Fruit", //food type
    200, //grams
    320, //calories
    4, //proteins
    17, //carbohydrates
    1, //sugars
    4.5, //saturated fat
    0, //trans fat
    "avacado.jpg"
);
foodList.push(avacado);

const carrot = new SingleFood(
    "Carrot", //name
    "Vegetable", //food type
    61, //grams
    25, //calories
    0.6, //proteins
    6, //carbohydrates
    3, //sugars
    0, //saturated fat
    0, //trans fat
    "carrot.jpg"
);
foodList.push(carrot);

const banana = new SingleFood(
    "Banana", //name
    "Fruit", //food type
    120, //grams
    105, //calories
    1.3, //proteins
    27, //carbohydrates
    14, //sugars
    0, //saturated fat
    0, //trans fat
    "banana.jpg"
);
foodList.push(banana);

const walnuts = new SingleFood(
    "Walnuts", //name
    "Nut", //food type
    4, //grams
    185, //calories
    4.3, //proteins
    3.9, //carbohydrates
    0, //sugars
    1.7, //saturated fat
    0, //trans fat
    "walnuts.jpg"
);
foodList.push(walnuts);

const list = document.querySelector("#foodList");

foodList.forEach(food => {
    
    let img = document.createElement("img");
    let li = document.createElement("li");
    let h2 = document.createElement("h2");

    img.src = `images/final-images/${food.image}`;
    h2.textContent = food.name;


    li.appendChild(img);
    li.appendChild(h2);
    list.appendChild(li);

    li.addEventListener("click", () => {
        food.showInfo();
    });
});
