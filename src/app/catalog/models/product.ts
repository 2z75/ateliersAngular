export class Product {
    id: number;
    name: string;
    price?: number; 
    promo?: string; 


    constructor(id: number, name: string, price?: number, promo?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.promo = promo;
    }
}