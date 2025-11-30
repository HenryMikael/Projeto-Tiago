import { Component } from '@angular/core';
import { Navbar } from '../../app/components/navbar/navbar';
import { Footer } from '../../app/components/footer/footer';
import { CardSalasComponents } from '../../app/components/card-salas-components/card-salas-components';
import { ChatbotComponent } from '../../app/components/chatbotcomponent/chatbotcomponent';


@Component({
  selector: 'app-salas-components',
  standalone: true,
  imports: [CardSalasComponents, Navbar, Footer, ChatbotComponent],
  templateUrl: './salas-components.html',
  styleUrl: './salas-components.css'
})
export class SalasComponents {

}
