import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Home'
    },
    {
        path: 'esperienza',
        loadComponent: () => import('./pages/esperienza/esperienza').then(m => m.Esperienza),
        title: 'esperienza'
    },
    {
        path: 'progetti',
        loadComponent: () => import('./pages/progetti/progetti').then(m => m.Progetti),
        title: 'progetti'
    },
    {
        path: 'skills',
        loadComponent: () => import('./pages/skills/skills').then(m => m.Skills),
        title: 'skills'
    },
    {
        path: 'page-not-found',
        loadComponent: () => import('./pages/errors/page-not-found/page-not-found').then(m => m.PageNotFound),
        title: '404 - Page Not Found'
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
    }
];
