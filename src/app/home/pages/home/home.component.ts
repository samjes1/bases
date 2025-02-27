import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from "../../components/article/article.component";
import { SharedModule } from "../../../shared/shared.module";
import { IonContent } from '@ionic/angular/standalone';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [IonContent, SharedModule, ArticleComponent]
 
})
export class HomeComponent  implements OnInit {

  cargando: boolean = false 

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    //this.databaseService.getData('items')
  }

  getCarrito(){
    console.log(this.databaseService.getData('carrito') , 'lo que agregas al carrito');
     
  }

}
