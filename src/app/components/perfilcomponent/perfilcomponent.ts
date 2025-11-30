import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfilcomponent',
  imports: [RouterModule],
  templateUrl: './perfilcomponent.html',
  styleUrl: './perfilcomponent.css'
})
export class Perfilcomponent {
   private router = inject(Router);
  voltar() {
    console.log('Navegando para home...');
    this.router.navigate(['/home']);
  }
  sair() {
    console.log('Navegando para Login...');
    this.router.navigate(['/login']);
  }
}
