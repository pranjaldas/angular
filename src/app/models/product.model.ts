export class Product{
    productId : number;
    imageUrl : string;
    price : number;
    constructor(id : number, url : string, price : number){
        this.productId = id;
        this.imageUrl = url;
        this.price = price;
    }
}