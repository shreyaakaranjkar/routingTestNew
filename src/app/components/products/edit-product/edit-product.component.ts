import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Iproduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productForm! : FormGroup;
  productId! : string;
  productObj!:Iproduct;
  isInEditMode! : boolean

  constructor(private prodserv : ProductsService, private route : ActivatedRoute, 
              private uuidServ : UuidService, private router : Router ) { }

  ngOnInit(): void {
    this.createproductForm();

     this.route.params
    .subscribe((params :Params) => {
      console.log(params)
      this.productId=params['productId']

      if(this.productId){
        this.isInEditMode = true
        this.productObj = this.prodserv.fetchSingleProduct(this.productId)
        this.productForm.patchValue(this.productObj)
      }
      
      if(this.productObj.canReturn ==0){
        this.productForm.disable()
      }
    })
  }

  onFormSubmit(){
    if(this.productForm.valid){
      let newProduct = {...this.productForm.value, productId : this.uuidServ.uuid()}
      this.prodserv.createNewProduct(newProduct);
      this.router.navigate(['/products'])
    }
  }

  //onUserUpdate
  onUserUpdate(){
    let updatedProduct = {...this.productForm.value, productId : this.productId }
    this.prodserv.updateProduct(updatedProduct)
    this.router.navigate(['/products'])
  }

  createproductForm(){
    this.productForm = new FormGroup({
      productName : new FormControl(null, Validators.required),
      canReturn : new FormControl(null, Validators.required),
      productStatus : new FormControl(null,Validators.required)
    })
  }

  canDeactive(){
    if(this.productForm.dirty){
      return confirm('Are You Sure You want to leave this page?')
    }
    return true
  }
}
