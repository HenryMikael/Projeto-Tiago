import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/navbar/navbar';
import { HomeComponents } from '../pages/home-components/home';
import { AcervoComponents } from "../pages/acervo/acervo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, HomeComponents, AcervoComponents],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Biblioteca');
}
