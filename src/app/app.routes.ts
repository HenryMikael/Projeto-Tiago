import { Routes } from '@angular/router';
import { HomeComponents } from '../pages/home-components/home';
import { SalasComponents } from '../pages/salas-components/salas-components';
import { AcervoComponents } from '../pages/acervo/acervo';
import { LoginScreen } from '../pages/login-screen/login-screen';
import { Registercomponent } from '../components/registercomponent/registercomponent';
import { Perfilcomponent } from '../components/perfilcomponent/perfilcomponent';

export const routes: Routes = [
  { path: '', redirectTo: 'login-screen', pathMatch: 'full' },
  { path: 'login-screen' , component: LoginScreen},
  { path: 'home', component: HomeComponents},
  { path: 'salas', component: SalasComponents },
  { path: 'acervo', component: AcervoComponents },
  { path: 'register', component: Registercomponent },
  { path: 'login', component: LoginScreen },
  { path: 'perfil', component: Perfilcomponent}
];
