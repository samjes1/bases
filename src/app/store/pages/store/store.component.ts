import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from "../../components/product-detail/product-detail.component";
import { IonContent } from '@ionic/angular/standalone';
import { ModelStore } from 'src/app/models/store.interface';
import { DatabaseService } from '../../../services/database.service';
import { CarritoService } from '../../../services/carrito.service';



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
  tituloPagina = 'Tienda'

  private databaseService = inject(DatabaseService)
   private carritoService = inject(CarritoService) 

  constructor() {
    this.loadItems();
  
   }

  ngOnInit() {}

  loadItems() {
    this.databaseService.getData('items')
      setTimeout(() => {
        this.items = DataDemo; 
        this.cargando = false;
        console.log(this.items, 'Datademo');
      }, 2000);
  }

 
  addItem(item: ModelStore.Item){
   //this.carritoService.addItem(item);
   this.carrito = this.carritoService.carrito;
  }

 /*  getTotal(){
    let total = 0;
    let cantidad = 0;
    this.carrito.items.forEach((producto) => {
      total = total + (producto.item.price * producto.cant);
      cantidad += producto.cant;
    });
     this.carrito.total = total;
     this.carrito.cantidadtotal = cantidad;
     
  } */

  removeItem(item: ModelStore.Item){
    //this.carritoService.removeItem(item);
    this.carrito = this.carritoService.carrito;
    
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
