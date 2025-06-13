import { Component, OnInit } from '@angular/core';
import {lastValueFrom, Observable} from 'rxjs';
import { CartService } from '@services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
  standalone: false
})

export class CarritoComponent {
  cartItems: any[] = [];
  totalCost: number = 0;
  loading: boolean = false;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.loading = true;
    this.cartItems = await this.cartService.getCart();
    this.cartItems.forEach(item => { this.totalCost += item.price * item.quantity})
    this.loading = false;
  }

  async remove(itemDel: any): Promise<void> {
    await this.cartService.removeFromCart(itemDel.id);
    this.cartItems = this.cartItems.filter(item => item != itemDel)
    this.totalCost -= itemDel.price * itemDel.quantity;
  }

  async changeQty(item: any, event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const qty = Math.max(1, Number(input.value));
    await this.cartService.updateQuantity(item.id, qty);
    if(qty > item.quantity){
      this.totalCost += item.price
      this.cartItems[this.cartItems.indexOf(item)].quantity += 1;
    }else{
      this.totalCost -= item.price
      this.cartItems[this.cartItems.indexOf(item)].quantity -= 1;
    }
  }

  navigate(){
    this.router.navigate(['/productos'])
  }
}
