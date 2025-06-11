import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/integration/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    const { email, password } = this.loginForm.value;
    await this.authService.login({ email: email, password: password });
    this.router.navigate(['/home']);
  }

  redirect(){
    this.router.navigate(['/register']);
  }
}
