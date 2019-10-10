
class ShoppingCart {
  constructor(cart) {
    // this.products = []; // could make it an array but an object is better
    // this.products = {
    //   name:null,
    //   prod_id:null,
    //   price:null

    // };
    this.cart = {}};
  }

  addProduct(producs) {
    // if (!this.price )
    // console.log('inside addProducts');
    // console.log(products);
    if(!this.cart[products.id]){
      this.cart[products.id] = {
      quantity: 1,
      product: products,
      };
    } else {
      this.cart[products.id].quantity++;
    }

updateQanity(id, quantity ){
  this.cart[id].quantity = quantity;
}

  removeProduct(id, all=true , quantity) {}

  // addProducts(products) {        // one option
  //   products.forEach((product) => {
  //     this.addProduct(product);
  //   });
  // }

  caclTotalPrice() {}

  checkDiscountCode() {}
  }

class Watch {
  constructor(opts) {
    this.price = opts.price;
    this.brand=  opts.brand;
    this.sku = opts.sku;
    this.description = opts.description;
    this.inventoryCount = opts.inventoryCount;
    this.id = opts.id;
  }
}

// all cost are in pennies
const watch = new Watch({
  price: 100000,
  brand: 'Weiss Watch Company',
  sku: '1984DA89AEQR20',
  description: 'This is a cool watch',
  inventoryCount: 50,
  id: '090914097'

});

const cart = new ShoppingCart();

cart.addProduct(watch);
cart.removeProduct(watch);
