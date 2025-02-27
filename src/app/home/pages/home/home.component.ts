import { Component, inject, OnInit } from '@angular/core';
import { ArticleComponent } from "../../components/article/article.component";
import { SharedModule } from "../../../shared/shared.module";
import { IonContent } from '@ionic/angular/standalone';
import { DatabaseService } from 'src/app/services/database.service';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [IonContent, SharedModule, ArticleComponent]
 
})
export class HomeComponent  implements OnInit {

  cargando: boolean = false 
  private carritoService = inject(CarritoService)

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    //this.databaseService.getData('items')
    this.carritoService.getCarritoChanges().subscribe(changes => {
      console.log('carrito', changes);
    })
  }

  getCarrito(){
    console.log(this.databaseService.getData('carrito') , 'lo que agregas al carrito');
     
  }

}
