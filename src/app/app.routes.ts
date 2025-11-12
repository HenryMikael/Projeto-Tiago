import { Routes } from '@angular/router';
import { HomeComponents } from '../pages/home-components/home-components';
import { SalasComponents } from '../pages/salas-components/salas-components';
import { AcervoComponents } from '../pages/acervo-components/acervo-components';

export const routes: Routes = [
  { path: 'home', component: HomeComponents },
  { path: 'salas', component: SalasComponents },
  { path: 'acervo', component: AcervoComponents}
];
