import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { CartItem } from '@models/cart-item';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class CartService {
  private apiUrl = `${environment.apiUrl}/cart`;
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor(private http: HttpClient) {
    this.loadFromServer();
  }

  async getCart() {
    return await lastValueFrom(this.http.get<any>(`${environment.apiUrl}/cart`, { withCredentials: true }));
  }

  getTotalCount$(): Observable<number> {
    return this.cartSubject.asObservable().pipe(
      map(items => items.reduce((sum: any, i: { quantity: any; }) => sum + i.quantity, 0))
    );
  }

  private async loadFromServer(): Promise<void> {
    const items = await lastValueFrom(
      this.http.get<CartItem[]>(this.apiUrl, { withCredentials: true })
    );
    this.cartSubject.next(items);
  }

  async addToCart(item: CartItem): Promise<void> {
    await lastValueFrom(
      this.http.post<CartItem>(this.apiUrl, item, { withCredentials: true })
    );
    await this.loadFromServer();
  }

  async updateQuantity(id: number | string, quantity: number): Promise<void> {
    await lastValueFrom(
      this.http.put(
        `${this.apiUrl}/${id}`,
        { quantity },
        { withCredentials: true }
      )
    );
    await this.loadFromServer();
  }

  async removeFromCart(id: number | string): Promise<void> {
    await lastValueFrom(
      this.http.delete(`${this.apiUrl}/${id}`, { withCredentials: true })
    );
    await this.loadFromServer();
  }
}
