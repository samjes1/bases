import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsModule } from '../notifications/notifications.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NotificationsModule,
    RouterModule, // add this line for routing in shared module  (this module is used in multiple modules)
   

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
