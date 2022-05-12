const sizes = {
  small: {
    price: 50,
    calories: 20,
  },
  medium: {
    price: 75,
    calories: 30,
  },
  big: {
    price: 100,
    calories: 40,
  },
};

const topings = {
  cheese: {
    price: 10,
    calories: 20,
  },
  salad: {
    price: 20,
    calories: 5,
  },
  potatoes: {
    price: 15,
    calories: 10,
  },
  seasoning: {
    price: 15,
    calories: 0,
  },
  mayonnaise: {
    price: 20,
    calories: 5,
  },
};

function selectHamburger(sizes) {
  this.sizes = sizes;
  this.topings = [];
}

selectHamburger.prototype.addTopping = function (topings) {
  this.topings.push(topings);
};

selectHamburger.prototype.getPrice = function () {
  return this.topings.reduce((a, e) => (a += e.price), this.sizes.price);
};

selectHamburger.prototype.getCalories = function () {
  return this.topings.reduce((a, e) => (a += e.calories), this.sizes.calories);
};

const mediumHamburger = new selectHamburger(sizes.medium);
mediumHamburger.addTopping(topings.cheese);
mediumHamburger.addTopping(topings.mayonnaise);

const price = mediumHamburger.getPrice();
console.log(`Your total price of hamburger - ${price} UAH`);
const caloriesAll = mediumHamburger.getCalories();
console.log(`Your total calories of hamburger - ${caloriesAll}`);
