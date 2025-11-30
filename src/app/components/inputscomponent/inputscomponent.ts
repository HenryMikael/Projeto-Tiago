import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputscomponent',
  imports: [RouterModule, FormsModule],
  templateUrl: './inputscomponent.html',
  styleUrl: './inputscomponent.css',
})
export class Inputscomponent {
  private router = inject(Router);

  email: string = '';
  password: string = '';

  fazerLogin() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos');
      return;
    }
    if (!this.email) {
      alert('Preencha o e-mail');
      return;
    }
    if (this.password !== this.password) {
      alert('Senha incorreta');
      return;
    }

    console.log('navegando para home...');
    this.router.navigate(['/home']);
  }
}
