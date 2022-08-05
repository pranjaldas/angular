import { Product } from "../models/product.model";

export class ProductService{
    productList : Product[]=[
        new Product(1,"https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw5138c0ea/original/90_A88541-1F00613_2B020_10_BaroccoMosaicMotifJacket-Jacketsandcoats-versace-online-store_0_1.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg",1395),
        new Product(2,"https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6df3a5d/original/90_A88427-1F00539_5B000_10_MedusaAmplifiedPrintJacket-Jacketsandcoats-versace-online-store_0_1.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg",1175),
        new Product(3,"https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw61b221b9/original/90_A88691-A233255_A1008_10_MedusaPufferJacket-Jacketsandcoats-versace-online-store_0_1.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg",1150),
        new Product(4,"https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw95910dab/original/90_A87432-A230630_A1008_10_GrecaPatternQuiltedJacket-Jacketsandcoats-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg",1575),
        new Product(5,"https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw52489b23/original/90_A86388-A230630_A1008_10_ZipAccentHoodedJacket-JacketsandCoats-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg",1230),
    ];
    getTheProduct(id:number){
        let product = this.productList.find(pro => pro.productId == id);
        return product == undefined ? null: product;
    }
}