import { Component, OnInit } from '@angular/core';
import { ModelsHome } from '../../../models/home.interface';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {

  article!: ModelsHome.ArticuloI;

  constructor() { 
    this.loadArticulo();

  }

  ngOnInit() {}

  loadArticulo(){
    const data: ModelsHome.ArticuloI = {
      title: 'Angular',
      description: 'lorem ipsum dolor sit am',
      image: {
        url: '/assets/images/angular.png',
        desc: 'logo de angular'
      },

    }
    this.article = data;
  }
  



}
