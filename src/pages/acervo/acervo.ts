import { Component } from '@angular/core';
import { Navbar } from '../../app/components/navbar/navbar';
import { Sectioncomponent } from '../../app/components/sectioncomponent/sectioncomponent';
import { Footer } from '../../app/components/footer/footer';
import { ChatbotComponent } from '../../app/components/chatbotcomponent/chatbotcomponent';


@Component({
  selector: 'app-acervo',
  imports: [Navbar, Sectioncomponent, Footer, ChatbotComponent],
  templateUrl: './acervo.html',
  styleUrl: './acervo.css'
})
export class AcervoComponents {

}
