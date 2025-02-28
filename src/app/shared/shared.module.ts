import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsModule } from '../notifications/notifications.module';
import { RouterModule } from '@angular/router';
import { DetailCarritoComponent } from './components/detail-carrito/detail-carrito.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NotificationsModule,
    DetailCarritoComponent,
    RouterModule, // add this line for routing in shared module  (this module is used in multiple modules)
   

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    DetailCarritoComponent,
  ]
})
export class SharedModule { }
