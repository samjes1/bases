import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ModelStore } from 'src/app/models/store.interface';
import { CarritoService } from 'src/app/services/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-carrito',
  templateUrl: './detail-carrito.component.html',
  styleUrls: ['./detail-carrito.component.scss'],
})
export class DetailCarritoComponent implements OnInit, OnDestroy{
  carrito!: ModelStore.Carrito;
  subscriptionCarrito!: Subscription;
  private carritoService = inject(CarritoService);
  constructor() {}

  ngOnInit() {
    this.carrito = this.carritoService.carrito;
    this.carritoService.getCarritoChanges().subscribe((changes) => {
      console.log('getCarritoChanges en store ->', changes);
      this.carrito = changes;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionCarrito?.unsubscribe();
  }

}
