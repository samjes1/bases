import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModelStore } from 'src/app/models/store.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito$ = new Subject<ModelStore.Carrito>()

  carrito!: ModelStore.Carrito;

  constructor() {
    this.initCarrito();
   }

  private initCarrito(){
    this.carrito = {
      total: 0,
      cantidadtotal: 0,
      items: [],
      
    };
    console.log('this.carrito', this.carrito);
    
  }

  getCarritoChanges(){
    return this.carrito$.asObservable();
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
     this.carrito$.next(this.carrito)
     return this.carrito.total;

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


}
