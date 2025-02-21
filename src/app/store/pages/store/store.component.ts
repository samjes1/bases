import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from "../../components/product-detail/product-detail.component";
import { IonContent } from '@ionic/angular/standalone';
import { ModelStore } from 'src/app/models/store.interface';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  imports: [SharedModule, IonContent, ProductDetailComponent]
})
export class StoreComponent  implements OnInit {

  carrito!: ModelStore.Carrito;
  pedido!: ModelStore.Pedido[];
  items!: ModelStore.Item[];
  cargando: boolean = true;
  cantidad!: number;


  constructor() {
    this.loadItems();
    this.initCarrito();
   }

  ngOnInit() {}

  loadItems() {
      setTimeout(() => {
        this.items = DataDemo; 
        this.cargando = false;
        console.log(this.items, 'Datademo');
      }, 2000);
  }

  initCarrito(){
    this.carrito = {
      total: 0,
      cantidadtotal: 0,
      items: [],
      
    };
    console.log('this.carrito', this.carrito);
    
  }
 

  validateInput(){
    console.log('validate input');
  }

  updateInput(ev: any){
    console.log('update input', ev);
  }

}

const DataDemo: ModelStore.Item[] = [
  {
    id: '001',
    name: 'Producto 1',
    description: 'Descripcion del producto 1',
    price: 1.12,
    image: './assets/images/hamburguesa.jpeg'
  },
  {
    id: '002',
    name: 'Hamburguesa con Queso', 
    description: 'Descripcion del producto 2',
    price: 4.99,
    image: './assets/images/hamburguesadequeso.jpeg'
  },
  {
    id: '003',
    name: 'Hamburguesa Especial',
    description: 'Descripcion del producto 3',
    price: 7.50,
    image: './assets/images/hamburguesaespecial.jpeg'
  },
 
]
