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