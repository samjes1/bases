import { IonContent } from '@ionic/angular/standalone';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreRoutingModule,
    IonContent,
    SharedModule,
    ProductDetailComponent
  ],
 
})
export class StoreModule { }
