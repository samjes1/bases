import { Component, inject, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { CarritoService } from 'src/app/services/carrito.service';
import { DatabaseService } from 'src/app/services/database.service';
import { WebService } from 'src/app/services/web.service';
import { SharedModule } from "../../../shared/shared.module";
import { ArticleComponent } from "../../components/article/article.component";
import { Models } from 'src/app/models/models';
import { ModelsHome } from 'src/app/models/home.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [IonContent, SharedModule, ArticleComponent]
 
})
export class HomeComponent  implements OnInit {

  private webService = inject(WebService); 
  articles!: ModelsHome.ArticleI[]; 
  cargando: boolean = false 
  private carritoService = inject(CarritoService)

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    //this.databaseService.getData('items')
    /* this.carritoService.getCarritoChanges().subscribe(changes => {
      console.log('carrito', changes);
    }) */

    this.getArticles();
    this.createArticles();



  }

  async getArticles() {
    this.cargando = true;
    const url = 'https://jsonplaceholder.typicode.com/';
    const res = await this.webService.request<ModelsHome.ArticleI[]>('GET', url, 'posts' );
    console.log('data' , res);
    if ( res ) {
      this.articles = res; 
      this.articles.forEach(article => {
        console.log('article', article.time);
        
        article.time = new Date();
      });
    }    
    this.cargando = false;
    
  }

  async createArticles(){
    const url = 'https://jsonplaceholder.typicode.com/';
    const data: ModelsHome.ArticleI = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    const res = await this.webService.request<ModelsHome.ArticleI[]>('POST', url, 'posts', data);
    console.log('data createArticles', res);
    
  }


  getCarrito(){
    console.log(this.databaseService.getData('carrito') , 'lo que agregas al carrito');
     
  }

}
