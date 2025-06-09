import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ModifyUser } from '../../models/user/modifyUser';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {}

  async getUserProfile(){
    return await lastValueFrom(this.http.get<User>('http://localhost:5000/api/users/profile' , { withCredentials: true }));
  }

  async modifyUser(user: ModifyUser){
    return await lastValueFrom(this.http.put<any[]>('http://localhost:5000/api/users/update', user , { withCredentials: true }));
  }
}
