import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productArray :Array<Iproduct> = [
    {
      productName : 'Samsung',
      productId : '101',
      productStatus : 'In-Progress',
      canReturn : 1
    },
    {
      productName : 'Vivo',
      productId : '102',
      productStatus : 'Dispatched',
      canReturn : 0
    },
    {
      productName : 'Redmi',
      productId : '103',
      productStatus : 'Delivered',
      canReturn : 1
    },
    {
      productName : 'Iphone',
      productId : '104',
      productStatus : 'Delivered',
      canReturn : 0
    }
  ]

  fetchAllProducts(){
    return this.productArray
  }

  fetchSingleProduct(id:string){
    return this.productArray.find(prod => prod.productId === id) as Iproduct
  }

  createNewProduct(prodObj : Iproduct){
    this.productArray.push(prodObj)
  }

  updateProduct(updatedProduct : Iproduct){
    let getIndex = this.productArray.findIndex(prod => prod.productId === updatedProduct.productId);
    this.productArray[getIndex] = updatedProduct
  }

  deleteProduct(delId:string){
    let getDelId = this.productArray.findIndex(prod => prod.productId === delId)
    this.productArray.splice(getDelId,1)
  }
}
