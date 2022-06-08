import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  {path:"",redirectTo:"create",pathMatch:"full"},
  {path:"create",component:CreateBookComponent},
  {path:"list",component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
