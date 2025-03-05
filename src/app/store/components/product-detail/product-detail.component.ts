import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @Input() item: any;
  @Input() color!: string;
  @Input() cantidad!: number;
  @Input() index!: number; // Add this line to define the index input property

  constructor() {

   }

  ngOnInit() {}

  removeItem() {
    // Implementation for removing item
  }

  addItem() {
    // Implementation for adding item
  }
}
