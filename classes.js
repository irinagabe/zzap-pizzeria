const pizzaSpecifications = {
  "sizes": {
    "small": 200,
    "medium": 300,
    "large": 400
  },
  "toppings": {
    "bacon": 30,
    "extraCheese": 20,
    "pepperoni": 50
  },
  "crusts": {
    'thin': 50,
    'deepPan': 60,
    'extraThick': 80
  }
};


class Pizza {
  constructor(size, toppings, crust, price) {
    this.size = size; this.toppings = toppings;
    this.crust = crust;
    this.price = price;
  }

  calculatePrice() {

  }
}

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.pizzasOrdered = [];
    this.costOfOrder = 0;
  }

  makePizza(size, toppings, crust) {
    let pizza = new Pizza(size, toppings, crust);
    pizza.price = pizza.calculatePrice();

    return pizza;
  }

  addPizza(pizza) {
    this.pizzasOrdered.push(pizza);
  }

  calculateCost() {
    let pizzas = this.pizzasOrdered;

    this.costOfOrder = pizzas.reduce(function (total, pizza) {
      return pizza.price + total;
    }, 0);
  }
}

let pizza1 = new Pizza('large', ['bacon', 'pineapples'], 'crispy', 300);
let pizza2 = new Pizza('large', ['bacon', 'pineapples'], 'crispy', 600);

let order = new Order(1);
order.addPizza(pizza1);
order.addPizza(pizza2);
order.calculateCost();

console.log(order.costOfOrder);