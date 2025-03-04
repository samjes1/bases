import { Component, Input, OnInit } from '@angular/core';
import { ModelsHome } from '../../../models/home.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [RouterModule],
})
export class ArticleComponent implements OnInit {
  @Input() article!: ModelsHome.ArticleI;

  constructor(private router: Router) {
    //this.loadArticulo();
  }

  ngOnInit() {}

  loadArticulo() {
    /*  const data: ModelsHome.ArticuloI = {
      title: 'Angular',
      description: 'lorem ipsum dolor sit am',
      image: {
        url: '/assets/images/angular.png',
        desc: 'logo de angular'
      },

    }
    this.article = data; */
  }

  gotoArticle() {
    // this.router.navigate([`/home/article/${this.article.id}`])

    this.router.navigate([`/home/article`], {
      queryParams: { id: this.article.id, a: 'a', b: 'b' },
    });
  }
}
