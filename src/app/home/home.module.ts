import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { IonContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponent,
    ArticleComponent,
    ArticlePageComponent,
    IonContent,
    SharedModule,
  ],
})
export class HomeModule {}
