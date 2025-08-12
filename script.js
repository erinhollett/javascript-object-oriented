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
    return this.price * this.quantity;
  }

  toString() {
    return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
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
    return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}

// 2.3: Task: Create at least two instances of this class with sample data:
let receipt1 = new PerishableProductProperties('Blueberries', 3.99, 2, '2025-08-20');
let receipt2 = new PerishableProductProperties('Bananas', 2.50, 1, '2025-08-16');

// == Part 4: Store Management == //
// 4.1: Create a Store ClassProperties inventory (array): 
class Store {
  constructor() {
    this.inventory = [];  // * To store an array of product objects
  }
// 4.2: Methods:
  // * Adds new product object to this.inventory
  addProduct(product) {
    this.inventory.push(product);
  }

// * Calculates and returns the total value from all the products in the store,
// * inventory. This will loop through each product in the this.inventory array,
// * for each product, it calls its getTotalValue() method (price * quantity),
// * and adds each products total value to the running 'total' variable.
// * It then returns the final total once all the products are processed.
  getInventoryValue() {
    let total = 0; // * Need to declare are variable to gather the total
    for (const product of this.inventory) { // * Go through each 'product' in the array
      total += product.getTotalValue(); // * Update the total each loop with each product's total value
    }
    return total;
  }

// * Loops though each product in the store's inventory array, and checks if,
// * the .name matches the name passed into the method, if there is a match,
// * it'll return the product and if not it'll return 'null'
  findProductByName(name) {
    for (const product of this.inventory) {
      if (product.name === name) {
        return product; // * Return the product if found
      }
    }
    return null; // * If there's no matching name
  }
}

// == Part 4: Store Management == //

// 4.1: Create at least 5 products, including at least 2 PerishableProduct objects:
let product1 = new ProductProperties('Apple Watch', 488.99, 1);
let product2 = new ProductProperties('Notebook', 7.66, 4);
let product3 = new ProductProperties('Desk Fan', 19.98, 2);
let product4 = new ProductProperties('Protein Bars', 10.47, 5);
let product5 = new ProductProperties('Erasers', 4.49, 3);
let product6 = new PerishableProductProperties('Peanut Butter', 10.97, 2, '2025-12-16');
let product7 = new PerishableProductProperties('Rice Krispies', 9.97, 4, '2026-02-28');

// 4.2: Add these products to a Store object:
let Walmart = new Store();
Walmart.addProduct(product1);
Walmart.addProduct(product2);
Walmart.addProduct(product3);
Walmart.addProduct(product4);
Walmart.addProduct(product5);
Walmart.addProduct(product6);
Walmart.addProduct(product7);

// 4.3: Print the total inventory value before and after applying a 15% discount
// BEFORE:
console.log("Total Inventory Value (Before Discount): ", Walmart.getInventoryValue()); 
// AFTER
ProductProperties.applyDiscount(Walmart.inventory, 0.15); // * Apply the discount
console.log("Total Inventory Value (After 15% Discount): ", Walmart.getInventoryValue()); // * Calls the same function but now all the .price attributes are changes from the .applyDiscount function above

// 4.4: Find and print the details of a specific product by its name:
const foundProduct = Walmart.findProductByName('Apple Watch');

// * Checks if the findProductByName() function returned an object, if it does,
// * it'll print the product's details by calling its toString() method
if (foundProduct) {
  console.log("Product found!");
  console.log(foundProduct.toString());
} else {
  console.log("Couldn't find product!");
}