import { Component, NgModule } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Maincomponent } from "../../components/maincomponent/maincomponent";
import { Servicescomponent } from '../../components/servicescomponent/servicescomponent';
import { Eventcomponent } from '../../components/eventcomponent/eventcomponent';


@Component({
  selector: 'app-home-components',
  imports: [Navbar, Footer, Maincomponent, Servicescomponent, Eventcomponent],
templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponents {

}
