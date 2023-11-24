import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  { path: 'admin', loadChildren: () => import('./pages/pages.routes').then(m => m.PAGES_ROUTES) }
];
