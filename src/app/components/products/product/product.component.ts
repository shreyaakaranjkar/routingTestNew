import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Iproduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prodId! : string;
  prodObj! : Iproduct

  constructor(private prodServ : ProductsService, private route : ActivatedRoute,
              private router : Router
  ) { }

  ngOnInit(): void {
     this.route.params.subscribe((params:Params)=>{
      this.prodId = params['productId']
      this.prodObj = this.prodServ.fetchSingleProduct(this.prodId)
    })
  }

  deleteUser(){
    this.prodServ.deleteProduct(this.prodId)
    alert('Product Deleted Successfully')
    this.router.navigate(['/products'])
  }

}
