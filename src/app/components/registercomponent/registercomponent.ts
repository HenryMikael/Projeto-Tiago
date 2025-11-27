import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registercomponent',
  imports: [RouterModule, FormsModule],
  templateUrl: './registercomponent.html',
  styleUrl: './registercomponent.css'
})
export class Registercomponent {
  private router = inject(Router); 

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  phone: string = '';



  registrar() {
    
    if (!this.password || !this.confirmPassword) {
      alert('Preencha todos os campos de senha');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('As senhas não conferem');
      return;
    }

    if (!this.email) {
      alert('Preencha o e-mail');
      return;
    }
    if (!this.phone) {
      alert('Preencha o telefone');
      return;
    }

    console.log('Navegando para login...');
    this.router.navigate(['/login-screen']);
  }
}
