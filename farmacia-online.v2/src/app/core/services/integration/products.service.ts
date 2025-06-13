import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {}

  async getProducts(){
    return await lastValueFrom(this.http.get<any[]>(`${environment.apiUrl}/products`, { withCredentials: true }));
  }
}
