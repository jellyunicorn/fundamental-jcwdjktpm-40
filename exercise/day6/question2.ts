class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

}

class Transaction {
    total: number;
    product: {};

    constructor(products: Product[]) {
        this.total = 0;
        for (let i = 0; i < products.length; i++) {
            this.total += products[i].price;
            this.product[products[i].name] = 1 + (this.product[products[i].name] || 0);
        }
    }

    addToCart(product: Product) {
        this.total += product.price;
        this.product[product.name] = 1 + (this.product[product.name] || 0);
    }

    showTotal() {
        console.log(this.total + " " + this.product);
    }

    checkout() {
        const finalTransaction = structuredClone(this);
        this.total = null;
        this.product = {};
        return finalTransaction;
    }
}