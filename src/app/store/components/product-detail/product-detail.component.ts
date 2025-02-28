import { NgStyle } from '@angular/common';
import { CarritoService } from './../../../services/carrito.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelStore } from 'src/app/models/store.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [RouterModule, NgStyle]
})
export class ProductDetailComponent implements OnInit {
    @Input()
    item!: ModelStore.Item;
    @Input()
    index!: number;
    // @Output() add = new EventEmitter();
    // @Output() remove = new EventEmitter();
  color: 'aliceblue' | '#fde2e2' | '#dfe7d6' = 'aliceblue'

    cantidad: number = 0;
  
  constructor(
    private carritoService: CarritoService) { }

  ngOnInit() {
    console.log('item', this.item);
    this.getColor();
  }

  
  addItem(){

    console.log('additem');
   // this.add.emit();
    this.carritoService.addItem(this.item);
    this.cantidad = ++this.cantidad;
 }

  removeItem(){
  
    console.log('removeitem');
    this.carritoService.removeItem(this.item);
   // this.remove.emit();
    if (this.cantidad > 0) {
            this.cantidad = --this.cantidad;
    }
  }

  getColor(){
    if (this.item.stock === 0){
      this.color = '#fde2e2';
    } else if (this.item.stock < 5) {
      this.color = 'aliceblue';
    }else 
    this.color = '#dfe7d6';
  }



}
