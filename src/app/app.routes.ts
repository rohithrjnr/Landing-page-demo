import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Northline — Clear thinking. Better work.',
    loadComponent: () => import('./pages/home-page/home-page').then((page) => page.HomePage),
  },
  {
    path: 'about',
    title: 'About us — Northline',
    loadComponent: () => import('./pages/about-page/about-page').then((page) => page.AboutPage),
  },
  {
    path: 'services',
    title: 'Services — Northline',
    loadComponent: () =>
      import('./pages/services-page/services-page').then((page) => page.ServicesPage),
  },
  {
    path: 'contact',
    title: 'Contact — Northline',
    loadComponent: () => import('./pages/contact-page/contact-page').then((page) => page.ContactPage),
  },
  { path: '**', redirectTo: '' },
];
