import { Component, OnInit } from '@angular/core';
import {lastValueFrom, Observable} from 'rxjs';
import { CartService } from '@services/cart.service';
import { CartItem } from '@models/cart-item';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
  standalone: false
})

export class CarritoComponent {
  cartItems: CartItem[] = [];
  totalCost: number = 0;
  loading: boolean = false;

  constructor(private cartService: CartService) {}

  async ngOnInit() {
    this.loading = true;
    this.cartItems = await this.cartService.getCart();
    console.log(this.cartItems);

  }

  async remove(item: CartItem): Promise<void> {
    this.loading = true;
    await this.cartService.removeFromCart(item.product.id);
  }

  async changeQty(item: CartItem, event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const qty = Math.max(1, Number(input.value));
    this.loading = true;
    await this.cartService.updateQuantity(item.product.id, qty);
  }

  async clearCart(): Promise<void> {
    if (confirm('¿Deseas vaciar todo el carrito?')) {
      this.loading = true;
      await this.cartService.clearCart();
    }
  }
}
