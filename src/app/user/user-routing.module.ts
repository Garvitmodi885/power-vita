import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { TestComponent } from './page/test/test.component';
import { ProductComponent } from './shared/product/product.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children : [
      {
        path : "",
        component  : HomeComponent
      },
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "test",
        component : TestComponent
      },
      {
        path : "contact",
        component : ContactComponent
      },
      {
        path : "product",
        component : ProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
