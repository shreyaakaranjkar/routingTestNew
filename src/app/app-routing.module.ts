import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/users/user/user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { ProductComponent } from './components/products/product/product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { CompDeactivateGuard } from './services/comp-deactivate.guard';
import { UserdeactivateGuard } from './services/userdeactivate.guard';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserroleGuard } from './services/userrole.guard';
import { ProductresolverService } from './services/productresolver.service';

const routes: Routes = [
  {
    path : '',
    component : AuthComponent,
    title : 'LogIn'
  },
  {
    path : 'home',
    component : HomeComponent,
    title : 'Dashboard',
    data : {
      UserRole : ['Buyer','Admin','SuperAdmin']
    }
  },
  {
    path : 'users',
    component : UsersComponent,
    title : 'Users',
    data : {
      UserRole : ['Admin','Buyer']
    },
    canActivate:[AuthGuardService,UserroleGuard],
    children :[
      {
        path : 'addUser',
        component : EditUserComponent
      },
      {
        path : ':userId',
        component : UserComponent
      },
      {
        path : ':userId/edit',
        component : EditUserComponent,
        canDeactivate : [UserdeactivateGuard]
      }
    ]
  },
    {
      path : 'products',
      component : ProductsComponent,
      title : 'Products',
      canActivate:[AuthGuardService,UserroleGuard],
      data : {
        UserRole : ['SuperAdmin','Buyer']
      },
        children :[
          {
            path : 'addProduct',
            component : EditProductComponent
          },
          {
            path : ':productId',
            component : ProductComponent,
            resolve : {
              productInfo : ProductresolverService
            }
          },
          {
            path : ':productId/edit',
            component : EditProductComponent,
            canDeactivate : [CompDeactivateGuard]
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
