import { Component, NgModule } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Maincomponent } from "../../components/maincomponent/maincomponent";


@Component({
  selector: 'app-home-components',
  imports: [Navbar, Footer, Maincomponent],
templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponents {

}
