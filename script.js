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
}

// == Part 2: Adding Inheritance == //

class PerishableProductProperties extends ProductProperties {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  toString() {
    console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`);
  }
}

let receipt1 = new PerishableProductProperties('Blueberries', 3.99, 2, '2025-08-20');
let receipt2 = new PerishableProductProperties('Bananas', 2.50, 1, '2025-08-16');