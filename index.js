// Write your code here
// Define the Breakfast class
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Define the Lunch class
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Define the Dinner class with a private property
  class Dinner {
    #dessert; // Declare private field for dessert
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert; // Initialize private field
    }
  
    // Method to get the value of the private dessert property
    getDessert() {
      return this.#dessert;
    }
  }
  
  // Example instances
  let breakfast = new Breakfast("Pancakes", "Coffee");
  let lunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
  let dinner = new Dinner("Garden Salad", "Minestrone", "Steak", "Cheesecake");
  
  console.log(breakfast); // Breakfast { food: 'Pancakes', drink: 'Coffee' }
  console.log(lunch); // Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
  console.log(dinner); // Dinner { salad: 'Garden Salad', soup: 'Minestrone', entree: 'Steak' }
  console.log(dinner.getDessert()); // Cheesecake
  