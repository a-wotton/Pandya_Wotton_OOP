class SingleFood {
    // Parameters:
    constructor(
        name,
        category,
        grams,
        calories,
        proteins,
        carbohydrates,
        sugars,
        saturatedFat,
        transFat,
        image
    ) {
        this.name = name;
        this.category = category;
        this.grams = grams;
        this.calories = calories;
        this.proteins = proteins;
        this.carbohydrates = carbohydrates;
        this.sugars = sugars;
        this.fats = {
            saturated: saturatedFat,
            trans: transFat,
        };
        this.image = image;
    }

    // Methods:
    showInfo() {
        const infoContainer = document.querySelector("#foodInfo");

        infoContainer.innerHTML = "";

        const heading = document.createElement("h2");
        heading.textContent = this.name;

        const detailsList = document.createElement("ul");

        const properties = ["category", "grams", "calories", "proteins", "carbohydrates", "sugars"];

        properties.forEach(prop => {
            const listItem = document.createElement("li");
            listItem.textContent = `${prop}: ${this[prop]}`;
            detailsList.appendChild(listItem);
        });

        const fatsList = document.createElement("li");
        fatsList.textContent = `Fats: Saturated - ${this.fats.saturated}, Trans - ${this.fats.trans}`;
        detailsList.appendChild(fatsList);

        const imageElement = document.createElement("img");
        imageElement.src = `images/${this.image}`;

        infoContainer.appendChild(heading);
        infoContainer.appendChild(detailsList);
        infoContainer.appendChild(imageElement);
    }
}

// class MultiFood extends SingleFood {
//     constructor (
//         name,
//         calories,
//         proteins,
//         carbohydrates,
//         sugars,
//         saturatedFat,
//         transFat,
//         image,
//         grams
//     ) {
//         super(name, calories, proteins, carbohydrates, sugars, saturatedFat, transFat, image)
//         this.grams = grams
//     }
// }

export {SingleFood}