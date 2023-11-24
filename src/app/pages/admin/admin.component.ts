import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

class Menu {
  name: string = 'new';
  icon?: string = 'error';
  link: string = '/';
  sub_menu?: Menu[]
}

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [ RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzToolTipModule, NzBreadCrumbModule]
})
export class AdminComponent implements OnInit {

  isCollapsed = false;
  list_menu: Menu[] = [
    {
      name: 'Maestras',
      icon: 'mail',
      link: 'navigation'
    },
    {
      name: 'Dashboard 2',
      icon: 'dashboard',
      link: 'dashboard',
      sub_menu: [
        {
          name: 'Welcome',
          link: 'welcome', 
        },
        {
          name: 'Welcome 2',
          link: 'welcome', 
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit() { }

}
