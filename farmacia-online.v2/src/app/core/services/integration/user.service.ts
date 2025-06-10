import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ModifyUser } from '../../models/user/modifyUser';
import { User } from '../../models/user/user';
import { environment } from '../../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {}

  async getUserProfile(){
    return await lastValueFrom(this.http.get<User>(`${environment.apiUrl}/users/profile` , { withCredentials: true }));
  }

  async modifyUser(user: ModifyUser){
    return await lastValueFrom(this.http.put<any[]>(`${environment.apiUrl}/users/update`, user , { withCredentials: true }));
  }

  async deleteAccount(){
    return await lastValueFrom(this.http.delete<any[]>(`${environment.apiUrl}/users/delete` , { withCredentials: true }));
  }
}
