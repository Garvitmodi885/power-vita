import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './shared/slider/slider.component';
import { ProductComponent } from './shared/product/product.component';
import { AboutComponent } from './page/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TestComponent } from './page/test/test.component';
import { ContactComponent } from './page/contact/contact.component';
import { PageheadComponent } from './shared/pagehead/pagehead.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    ProductComponent,
    AboutComponent,
    FooterComponent,
    TestComponent,
    ContactComponent,
    PageheadComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule { }
