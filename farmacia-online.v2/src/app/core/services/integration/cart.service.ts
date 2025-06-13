import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '@models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storageKey = 'cart_items';
  private cartSubject: BehaviorSubject<CartItem[]>;

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    const items: CartItem[] = saved ? JSON.parse(saved) : [];
    this.cartSubject = new BehaviorSubject<CartItem[]>(items);
  }

  /** Observable para suscribirse a cambios del carrito */
  getCart$(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  /** Obtiene el valor actual (sin suscripción) */
  getCart(): CartItem[] {
    return this.cartSubject.value;
  }

  /** Observable para suscribirse al total de items */
  getTotalCount$(): Observable<number> {
    return this.cartSubject.asObservable().pipe(
      map(items => items.reduce((sum, i) => sum + i.quantity, 0))
    );
  }

  /** Obtiene el total de items (valor sin suscripción) */
  getTotalCount(): number {
    return this.getCart().reduce((sum, i) => sum + i.quantity, 0);
  }

  /** Obtiene el total del precio */
  getTotalCost(): number {
    return this.getCart().reduce((sum, i) => sum + i.quantity * i.product.price, 0);
  }

  /** Agrega un producto o incrementa cantidad si ya existe */
  addToCart(item: CartItem): void {
    const items = this.getCart();
    const existing = items.find(i => i.product.id === item.product.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      items.push({ ...item });
    }
    this.updateStorage(items);
  }

  /** Remueve un producto del carrito */
  removeFromCart(id: number | string): void {
    const items = this.getCart().filter(i => i.product.id !== id);
    this.updateStorage(items);
  }

  /** Establece manualmente la cantidad de un producto */
  updateQuantity(id: number | string, quantity: number): void {
    const items = this.getCart();
    const existing = items.find(i => i.product.id === id);
    if (existing) {
      existing.quantity = Math.max(1, quantity);
      this.updateStorage(items);
    }
  }

  /** Limpia todo el carrito */
  clearCart(): void {
    this.updateStorage([]);
  }

  /** Guarda en localStorage y emite actualización */
  private updateStorage(items: CartItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.cartSubject.next(items);
  }
}
