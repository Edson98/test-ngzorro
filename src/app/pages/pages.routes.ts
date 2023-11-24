import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MaestrasComponent } from './maestras/maestras.component';

export const PAGES_ROUTES: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      { 
        path: 'master', 
        component: MaestrasComponent 
      },
    ]
  },
    
];
