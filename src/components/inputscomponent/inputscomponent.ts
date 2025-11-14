import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inputscomponent',
  imports: [RouterModule],
  templateUrl: './inputscomponent.html',
  styleUrl: './inputscomponent.css',
})
export class Inputscomponent {
  private router = inject(Router); 

  fazerLogin() {
    console.log('Botão clicado, navegando para home...'); 
    this.router.navigate(['/home']);
  }
}