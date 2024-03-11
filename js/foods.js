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
    // Properties:
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
        } 
        this.image = image

    }
        // Methods:
        showInfo() {
        console.log(this);
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