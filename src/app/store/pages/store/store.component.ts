import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from "../../components/product-detail/product-detail.component";
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  imports: [SharedModule, IonContent, ProductDetailComponent]
})
export class StoreComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
