import { Component, NgModule } from '@angular/core';
import { Navbar } from '../../app/components/navbar/navbar';
import { Footer } from '../../app/components/footer/footer';
import { Maincomponent } from '../../app/components/maincomponent/maincomponent';
import { Servicescomponent } from '../../app/components/servicescomponent/servicescomponent';
import { Eventcomponent } from '../../app/components/eventcomponent/eventcomponent';
import { ChatbotComponent } from '../../app/components/chatbotcomponent/chatbotcomponent';

@Component({
  selector: 'app-home-components',
  imports: [Navbar, Footer, Maincomponent, Servicescomponent, Eventcomponent, ChatbotComponent],
templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponents {

}
