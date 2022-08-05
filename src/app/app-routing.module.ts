import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  { path : 'todo', component: TodoComponent},
  { path : 'home', component: TodoComponent},
  { path : 'registration', component: RegistrationComponent},
  { path : 'shopping', component: ShoppingComponent},
  { path : 'product/:id', component: ProductComponent},
  { path : 'product', component: ProductComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
