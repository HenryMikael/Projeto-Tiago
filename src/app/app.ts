import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from "../components/footer/footer";
import { Sidebar } from '../components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('thiago');
}
