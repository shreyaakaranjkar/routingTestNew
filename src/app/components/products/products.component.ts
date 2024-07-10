import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selId! : string;
  
  productsInfo! : Array<Iproduct>
  constructor(private prodServ : ProductsService) { }

  ngOnInit(): void {
    this.productsInfo = this.prodServ.fetchAllProducts()
  }

}
