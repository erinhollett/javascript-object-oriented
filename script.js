class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    totalValue = this.price * this.quantity;
    console.log(totalValue);
  }
}