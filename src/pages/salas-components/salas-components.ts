import { Component } from '@angular/core';
import { CardSalasComponents } from "./card-salas-components/card-salas-components";

@Component({
  selector: 'app-salas-components',
  standalone: true,
  imports: [CardSalasComponents],
  templateUrl: './salas-components.html',
  styleUrl: './salas-components.css'
})
export class SalasComponents {

}
