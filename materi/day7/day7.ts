/*
    ============ [Algorithms] ============
*/

// exercise

class Product {
    name: string;
    weight: number;
    price: number;
    stock: number;

    constructor(name: string, weight: number, price: number, stock: number) {
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.stock = stock;
    }
}

class Book extends Product {
    author: string;
    publisher: string;

    constructor(name: string, weight: number, price: number,
        stock: number, author: string, publisher: string) {
            super(name, weight, price, stock);
            this.author = author;
            this.publisher = publisher;
    }
}

class Clothing extends Product {
    brand: string;
    color: string;
    size: string;
    material: string;

    constructor(name: string, weight: number, price: number,
        stock: number, brand: string, color, string, size: string,
        material: string) {
            super(name, weight, price, stock);
            this.brand = brand;
            this.color = color;
            this.size = size;
            this.material = material;
        }
}

class OnlineShop {
    #products: Product[] = [];
    // yang next pake interface aja njir  
    #cart: any[][] = [];

    addProduct(product: Product): string {
        const foundProduct = this.#products.find((p) => p.name === product.name);
        if (!foundProduct) {
            this.#products.push(product);
            return "Produk berhasil ditambahkan";
        } else {
            return "Produk sudah ada di katalog";
        };
    }
    
    addToCart(productName: string, quantity: number): string {

        // cari nama produk dalam katalog, assign ke variable
        function getProductByName(productName: string) {
            for (const product of this.products) {
                if (product.name === productName) return product;
            }
            return null;
        }
        const product: Product = getProductByName(productName);

        // kalo product ada di katalog
        if (product != null) {
            return "Barang tidak tersedia di katalog";
        }
        // kalo stok ngga cukup
        if (product.stock < quantity) {
            return "Stok tidak cukup. Sisa stok barang: " + product.stock;
        }
        // kalo barang sudah ada di cart
        for (let i = 0; i < this.#cart.length; i++) {
            // tambahin jumblah di cart
            if (this.#cart[i][0] === product) {
                this.#cart[i][1] += quantity;
                product.stock -= quantity;
                return "Produk telah masuk cart";
            }
        }

        // kalo belom di cart, tambahin produk di cart
        this.#cart.push([product, quantity]);
        product.stock -= quantity;
        return "Produk telah masuk cart";
    }

    checkout(userMoney: number, distance: number) {
        let totalCost: number = 0;

        // itung total harga
        for(const item of this.#cart) {
            const product: Product = item[0];
            totalCost += product.price * item[1];
        };

        // kalo distance negatif return invalid
        if (distance < 0) {
            return "Invalid distance";
        };

        // itung ongkir
        const ongkir: number = distance * 2000;

        // itung total harga barang plus ongkir
        const totalPlusOngkir: number = totalCost + ongkir;

        // cek kalo uang user cukup
        if (userMoney < totalPlusOngkir) {
            return "Invalid payment amount";
        };

        // itung kembalian
        const change: number = totalPlusOngkir - userMoney;

        // bikin output
        let output: string = "Detail pembayaran:\n";

        // for(const item of this.#cart) {
        //     const product: Product = item[0];
        //     output += product.name + " " + item[1] + "x\n";
        // };

        output +=   "Total belanja: Rp. " + totalCost + "\n" +
                    "Total ongkir: Rp. " + ongkir + "\n" +
                    "Total harga: Rp. " + totalPlusOngkir + "\n"
                    "Kembalian: Rp. " + change;

        return output;
    }

    showCatalog() {
        return this.#products;
    }

    showCart() {
        return this.#cart;
    }
}

const book = new Book("cara jago ngoding", 1, 200000, 10, "budi", "partai buruh");
const baju = new Clothing("kaos", 3, 400000, 20, "banteng merah", "red", "XL", "kain", "");

const onlineShop = new OnlineShop();



console.log(onlineShop.addProduct(book));
console.log(onlineShop.addProduct(baju));
console.log(onlineShop.showCatalog());
console.log(onlineShop.showCart());
console.log((onlineShop.addToCart("jara jago ngoding", 4)));




