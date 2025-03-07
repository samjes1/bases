import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { IonContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';

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
    HighlightDirective
    
  ],
  
 
})
export class HomeModule {}
