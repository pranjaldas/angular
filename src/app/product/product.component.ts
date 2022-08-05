import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  product!: Product | null;
  productService !: ProductService;
  productList !: Product[];

  constructor(private activeRoute: ActivatedRoute,private router: Router) {
    this.productService = new ProductService();
   }

  ngOnInit(): void {
    this.product = this.productService.getTheProduct(Number(this.activeRoute.snapshot.paramMap.get('id')));
    if(this.product == null){
      this.productList= this.productService.productList;
    }
    console.log(this.activeRoute.snapshot.paramMap.get('id'));
  }
  viewProduct(id: number){
    this.router.navigate([`product/${id}`]);
  }

}
