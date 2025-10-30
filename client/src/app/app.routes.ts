import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Esperienza } from './pages/esperienza/esperienza';
import { Progetti } from './pages/progetti/progetti';
import { Skills } from './pages/skills/skills';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'esperienza',
    component: Esperienza,
    pathMatch: 'full',
  },
  {
    path: 'progetti',
    component: Progetti,
    pathMatch: 'full',
  },
  {
    path: 'skills',
    component: Skills,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
