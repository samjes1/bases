import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelsHome } from 'src/app/models/home.interface';
import { WebService } from 'src/app/services/web.service';
import { SharedModule } from "../../../shared/shared.module";
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  imports: [SharedModule, IonContent],
})
export class ArticlePageComponent  implements OnInit {

  private webservice = inject(WebService);
  private route = inject(ActivatedRoute);
  article!: ModelsHome.ArticleI;

  constructor() {
   
    this.route.params.subscribe( (params: any ) => {
      console.log('params in article-> ',params);
      if (params.id) {
        this.loadArticle(params.id);
      }
    })

    this.route.queryParams.subscribe( (queryParams: any) => {
      console.log('queryParams in article-> ',queryParams);
      if (queryParams.id){
        this.loadArticle(queryParams.id);
      }
      
    })

   }


  ngOnInit() {}

   async loadArticle(id: string){
    const url = 'https://jsonplaceholder.typicode.com';
    const path = 'posts/' + id;
    const res = await this.webservice.request<ModelsHome.ArticleI>('GET', url, path);    
   if (res) {
     this.article = res;
     console.log('article-> ', this.article);
   }
    

  }


}
