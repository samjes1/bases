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
  // private carritoService = inject(CarritoService) 

  constructor() {
    this.loadItems();
    this.initCarrito();
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

  initCarrito(){
    this.carrito = {
      total: 0,
      cantidadtotal: 0,
      items: [],
      
    };
    console.log('this.carrito', this.carrito);
    
  }
  addItem(item: ModelStore.Item){
    console.log('add item', item);
    let exist = false;
   this.carrito.items.every((itemExist) => {
      if(itemExist?.item?.id === item?.id){
        itemExist.cant += 1;
        exist = true;
        return false;
      }
      return true;
   }); 
   if (!exist){
    this.carrito.items.push({
      item,
      cant: 1,
    })
   }
    this.getTotal();
  }

  getTotal(){
    let total = 0;
    let cantidad = 0;
    this.carrito.items.forEach((producto) => {
      total = total + (producto.item.price * producto.cant);
      cantidad += producto.cant;
    });
     this.carrito.total = total;
     this.carrito.cantidadtotal = cantidad;
     
  }

  removeItem(item: ModelStore.Item){
    console.log('remove item', item);
    const exist = this.carrito.items.findIndex((itemExist) => {
      if(itemExist.item.id === item.id){
        return true;
      }
      return false;
      });

      if(exist >= 0){
       
        console.log('exist', exist);
        if (this.carrito.items[exist].cant === 1) {
          this.carrito.items.splice(exist, 1);
        } else {
          this.carrito.items[exist].cant -= 1;
        }
      }
      
    this.getTotal();
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
