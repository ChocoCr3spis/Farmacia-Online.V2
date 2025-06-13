import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '@services/cart.service';
import { CartItem } from '@models/cart-item';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss',
  standalone: false
})

export class CarritoComponent {
  cartItems$!: Observable<CartItem[]>;
  totalCost: number = 0;

  constructor(private cartService: CartService) {}

  async ngOnInit() {
    // Observable de items
    this.cartItems$ = this.cartService.getCart$();

    // También puedes suscribirte para calcular el total
    this.cartItems$.subscribe(items => {
      this.totalCost = this.cartService.getTotalCost();
    });
  }

  remove(id: number | string) {
    this.cartService.removeFromCart(id);
  }

  changeQty(id: number | string, event: any) {
    const qty = +event.target.value;
    this.cartService.updateQuantity(id, qty);
  }
}
