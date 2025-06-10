import { Component, ModelSignal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../../core/services/integration/user.service';
import { User } from '../../core/models/user/user';
import { ModifyUser } from '../../core/models/user/modifyUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  standalone: false
})
export class UserProfileComponent {
  profileForm!: FormGroup;
  userInfo: User | undefined;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  async ngOnInit() {

    this.userInfo = await this.userService.getUserProfile();

    this.profileForm = this.fb.group({
      name: [this.userInfo.user?.name, [Validators.required]],
      email: [this.userInfo.user?.email, [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validators: this.passwordsMatchValidator });
  }

  // Validador personalizado a nivel de formulario
  passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Formulario válido:', this.profileForm.value);
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  // Ayuda para ver errores en el HTML
  get passwordMismatch(): boolean {
    return this.profileForm.hasError('passwordsMismatch') &&
           this.profileForm.get('confirmPassword')?.touched!;
  }

  async modifyUserProfile(){
    let modUser: ModifyUser = {
      name: this.profileForm.controls['name'].value ,
      email: this.profileForm.controls['email'].value,
      password: this.profileForm.controls['confirmPassword'].value
    }

    await this.userService.modifyUser(modUser)
  }
}
