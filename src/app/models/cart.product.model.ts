import { Product } from "./product.model";
export class CartProduct{
    product : Product;
    quantity : number;
    amount : number;
    constructor(product : Product, quantity : number, amount : number){
        this.product = product;
        this.quantity = quantity;
        this.amount = amount;
    }
}