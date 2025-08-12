// == Part 1: Setting Up Classess == //

// 1.1: Create a Base Class: ProductProperties:
class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

// 1.2: Methods:
  getTotalValue() {
    totalValue = this.price * this.quantity;
    console.log(totalValue);
  }

  toString() {
    console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`)
  }

// == Part 3: Static Methods and Properties == //
// * Takes in the array of objects (products) and discount rate (discount),
// * loops through each object in the array, accesses the .price property,
// * calculates the discount amount by multiplying the price by the discount,
// * subtracts the discount amount from the original price, then updates the
// * .price property of that object to the new discounted price,
// * and will do that for each object in the array.
  static applyDiscount(products, discount) {
    for (const product of products) {
      const discountAmount = product.price * discount;
      product.price -= discountAmount;
    };
  }
}

// == Part 2: Adding Inheritance == //

// 2.1: Create a Subclass: PerishableProductProperties:
class PerishableProductProperties extends ProductProperties {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

// 2.2: Methods:
  toString() {
    console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`);
  }
}

// 2.3: Task: Create at least two instances of this class with sample data:
let receipt1 = new PerishableProductProperties('Blueberries', 3.99, 2, '2025-08-20');
let receipt2 = new PerishableProductProperties('Bananas', 2.50, 1, '2025-08-16');

// == Part 4: Store Management == //
class Store {
  constructor() {
    this.inventory = [];  // * To store an array of product objects
  }
}