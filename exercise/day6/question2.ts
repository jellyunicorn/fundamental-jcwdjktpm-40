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
        let productNames: string[];
        for (let i = 0; i < products.length; i++) {
            this.total += products[i].price;
            productNames.push(products[i].name);
        }
        this.product = productNames.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        })
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

