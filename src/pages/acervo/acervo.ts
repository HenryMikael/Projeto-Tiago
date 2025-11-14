import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sectioncomponent } from "../../components/sectioncomponent/sectioncomponent";

@Component({
  selector: 'app-acervo',
  imports: [Navbar, Sectioncomponent],
  templateUrl: './acervo.html',
  styleUrl: './acervo.css'
})
export class AcervoComponents {

}
