import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MaestrasComponent } from './maestras/maestras.component';
import { CreateUpdateMaestrasComponent } from './maestras/create-update-maestras/create-update-maestras.component';

export const PAGES_ROUTES: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      { 
        path: 'master', 
        component: MaestrasComponent 
      },
      { 
        path: 'edit-master', 
        component: CreateUpdateMaestrasComponent 
      },
    ]
  },
    
];
