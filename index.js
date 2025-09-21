// Class for Breakfast with food and drink properties
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// Class for Lunch with salad, soup, and drink properties
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// Class for Dinner with salad, soup, entree, and private dessert property
class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }

  // Getter for dessert to allow read access if needed
  getDessert() {
    return this.#dessert;
  }
}

// Example instances (optional)
// const breakfast1 = new Breakfast("Pancakes", "Orange Juice");
// const lunch1 = new Lunch("Caesar", "Tomato", "Iced Tea");
// const dinner1 = new Dinner("Garden", "Minestrone", "Steak", "Cheesecake");
