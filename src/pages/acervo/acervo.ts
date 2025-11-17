import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sectioncomponent } from "../../components/sectioncomponent/sectioncomponent";
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-acervo',
  imports: [Navbar, Sectioncomponent, Footer],
  templateUrl: './acervo.html',
  styleUrl: './acervo.css'
})
export class AcervoComponents {

}
