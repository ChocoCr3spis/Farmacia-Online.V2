import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/integration/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false,
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    const formData = this.registerForm.value;
    await this.authService.register(formData)
    await this.authService.login({ email: formData.email, password: formData.password })
    this.router.navigate(['/home']);
  }

  redirect(){
    this.router.navigate(['/login']);
  }
}