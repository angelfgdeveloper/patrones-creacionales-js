
class Product {

  constructor(id, name, cost) {
    this._id = id;
    this._name = name;
    this._cost = cost;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get cost() {
    return this._cost;
  }

  set cost(cost) {
    this._cost = cost;
  }

}

class ShoppingCart {

  static instance = undefined;

  constructor() {
    this._products = [];
  }

  static getInstance() {

    if (!ShoppingCart.instance) {
      ShoppingCart.instance = new ShoppingCart();
    }

    return ShoppingCart.instance;
  }

  get products() {
    return this._products;
  }

  add(product) {
    this._products.unshift(product);
  }

  deleteById(productId) {
    if (!productId) throw Error('No contiene un id');

    const productIndex = this._products.findIndex(product => product._id === productId);
    this._products.splice(productIndex, 1);
  }

}

function appSingleton() {

  const product1 = new Product(1, 'Lentes', 399.99);
  const product2 = new Product(2, 'Gorra', 179.99);
  const product3 = new Product(3, 'Cartera', 99.99);

  const shoppingCart = ShoppingCart.getInstance();
  shoppingCart.add(product1);
  shoppingCart.add(product2);

  const shoppingCarNewInstance = ShoppingCart.getInstance();
  shoppingCarNewInstance.add(product3);

  console.log('\n--- Shopping Car products ---\n');
  console.log(shoppingCart.products);

  console.log('\n--- Shopping Car New Instance products ---\n');
  console.log(shoppingCarNewInstance.products);

  // Products list must be the same
  console.log('\n--- Are shopping cars products the same? ---\n');
  console.log(shoppingCart.products === shoppingCarNewInstance.products); // true

  // The number of elements in the list must be the same, in this case 3
  console.log(
    '\n--- Is shopping car number of products in both instances equal? ---\n'
  );
  console.log(
    shoppingCart.products.length ===
      shoppingCarNewInstance.products.length
  );

  // Eliminar
  shoppingCarNewInstance.deleteById(3);
  console.log('\n--- Product deleted: 3---\n');

  console.log('\n--- Shopping Car products ---\n');
  console.log(shoppingCart.products);

  console.log('\n--- Shopping Car New Instance products ---\n');
  console.log(shoppingCarNewInstance.products);

  // The number of elements in the list must be the same, in this case 2
  console.log(
    '\n--- Is shopping car number of products in both instances equal? ---\n'
  );
  console.log(
    shoppingCart.products.length ===
      shoppingCarNewInstance.products.length
  );

}

appSingleton();


