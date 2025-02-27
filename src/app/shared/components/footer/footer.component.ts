import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule]
})
export class FooterComponent  implements OnInit {

  cant: number = 0;
private carritoService = inject(CarritoService);

  constructor() { }

  ngOnInit() {
    this.cant = this.carritoService.carrito.cantidadtotal;
    this.carritoService.getCarritoChanges().subscribe(changes => {
      this.cant = changes.cantidadtotal;
    })
  }

}
