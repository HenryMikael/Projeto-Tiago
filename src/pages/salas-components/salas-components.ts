import { Component } from '@angular/core';
import { CardSalasComponents } from "./card-salas-components/card-salas-components";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-salas-components',
  standalone: true,
  imports: [CardSalasComponents, Navbar, Footer],
  templateUrl: './salas-components.html',
  styleUrl: './salas-components.css'
})
export class SalasComponents {

}
