import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-buttoncomponent',
  imports: [RouterLink],
  templateUrl: './buttoncomponent.html',
  styleUrl: './buttoncomponent.css'
})
export class Buttoncomponent {
  login: string = 'Login'
  cadastrasse: string = 'Cadastrar-se'
}
