import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelStore } from 'src/app/models/store.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [RouterModule]
})
export class ProductDetailComponent  implements OnInit {
    @Input()
    item!: ModelStore.Item;
  constructor() { }

  ngOnInit() {
    console.log('item', this.item);
    
  }

  addItem(item: ModelStore.Item){

  }

  removeItem(item: ModelStore.Item){
  
     
  }



}
