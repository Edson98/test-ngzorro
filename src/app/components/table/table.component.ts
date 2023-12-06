import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NzTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  //@Input() columns_names: string[] = ['col_1', 'col_2' , 'col_3'];
 
}
