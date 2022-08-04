import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  { path : 'todo', component: TodoComponent},
  { path : 'home', component: TodoComponent},
  { path : 'registration', component: RegistrationComponent},
  { path : 'shopping', component: ShoppingComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
