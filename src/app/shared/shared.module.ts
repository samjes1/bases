import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsModule } from '../notifications/notifications.module';
import { RouterModule } from '@angular/router';
import { DetailCarritoComponent } from './components/detail-carrito/detail-carrito.component';
import { ArticlePageComponent } from '../home/pages/article-page/article-page.component';
import { IonContent } from '@ionic/angular/standalone';
import { ShortPipe } from './pipes/short.pipe';



@NgModule({
  declarations: [],
  imports: [
    
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NotificationsModule,
    DetailCarritoComponent,
    ArticlePageComponent,
    RouterModule, // add this line for routing in shared module  (this module is used in multiple modules)
    ShortPipe

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    DetailCarritoComponent,
    ShortPipe,
    CommonModule,
  ]
})
export class SharedModule { }
