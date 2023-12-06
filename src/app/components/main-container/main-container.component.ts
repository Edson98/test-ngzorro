import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CommonModule, NzBreadCrumbModule, NzSpaceModule, NzButtonModule, NzSwitchModule, NzCheckboxModule, NzInputModule, NzSelectModule, NzFormModule, NzDividerModule, TableComponent ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {
  @Input() breadcrumb: string | string[] = 'Breadcrumb';
  @Input() title: string = 'Titulo nuevo'
}
