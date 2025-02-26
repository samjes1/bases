import { Injectable } from '@angular/core';
import { ModelStore } from 'src/app/models/store.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito!: ModelStore.Carrito;

  constructor() {
    this.initcarrito();
   }

  initcarrito(){

  }

  addItem(){

  }

  getTotal(){}

  removeItem(){}


}
