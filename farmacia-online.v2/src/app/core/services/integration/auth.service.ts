import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {}

  async login(userCredentials: any){
    await lastValueFrom(this.http.post(`${environment.apiUrl}/auth/login`,userCredentials, { withCredentials: true }));
  }

  async register(userCredentials: any){
    await lastValueFrom(this.http.post(`${environment.apiUrl}/auth/register`,userCredentials));
  }

  async logout(){
    await lastValueFrom(this.http.post(`${environment.apiUrl}/auth/logout`, null, { withCredentials: true }));
  }
}
