import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [RouterModule]
})
export class ProductDetailComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
