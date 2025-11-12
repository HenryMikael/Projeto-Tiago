import { Component, NgModule } from '@angular/core';
import { Sobrecomponents } from '../../components/sobrecomponents/sobrecomponents';
import { Destaquecomponents } from './destaquecomponents/destaquecomponents';

@Component({
  selector: 'app-home-components',
  imports: [Sobrecomponents],
  templateUrl: './home-components.html',
  styleUrl: './home-components.css'
})
export class HomeComponents {

}
