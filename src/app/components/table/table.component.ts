import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { MainContainerComponent } from '../main-container/main-container.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, MainContainerComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  //@Input() columns_names: string[] = ['col_1', 'col_2' , 'col_3'];

  listOfData : any[] = [];
 
}
