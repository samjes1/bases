import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../../services/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule]
})
export class FooterComponent  implements OnInit, OnDestroy {

  cant: number = 0;
  private carritoService = inject(CarritoService);
  subscriptionCarrito!: Subscription

  constructor() { }

  ngOnInit() {
    this.cant = this.carritoService.carrito.cantidadtotal;
    this.subscriptionCarrito = this.carritoService.getCarritoChanges().subscribe(changes => {
      this.cant = changes.cantidadtotal;
    })
  }
  
  ngOnDestroy() {
    this.subscriptionCarrito?.unsubscribe();
    
  }


}
