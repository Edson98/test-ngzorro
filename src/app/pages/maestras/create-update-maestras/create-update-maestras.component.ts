import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { TableComponent } from '../../../components/table/table.component';


interface MaestrasForm {
  id          :   FormControl<string | null>;
  table_name  :   FormControl<string | null>;
  order       :   FormControl<string | null>;
  code        :   FormControl<string | null>;
  attribute   :   FormControl<string | null>;
  isEditable  :   FormControl<boolean | null>;
  isActive    :   FormControl<boolean | null>;
}

@Component({
  selector: 'app-create-update-maestras',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzSelectModule, NzInputModule, NzCheckboxModule, NzSwitchModule, NzButtonModule, NzSpaceModule, TableComponent ],
  templateUrl: './create-update-maestras.component.html',
  styleUrl: './create-update-maestras.component.css'
})
export class CreateUpdateMaestrasComponent {

  tittle: string = 'Nuevo Registro';
  button_text: string = 'Guardar';
  table_options: any[] = [
    {
      id: '1',
      option: 'Option 1'
    },
    {
      id: '2',
      option: 'Option 2'
    },
    {
      id: '3',
      option: 'Option 3'
    },
    {
      id: '4',
      option: 'Option 4'
    },
    {
      id: '5',
      option: 'Option 5'
    },
  ]

  maestrasForm: FormGroup<MaestrasForm> = this._fb.group<MaestrasForm>({
    id          :   this._fb.control(''),
    table_name  :   this._fb.control('', [Validators.required]),
    order       :   this._fb.control(''),
    code        :   this._fb.control('', [Validators. required]),
    attribute   :   this._fb.control(''),
    isEditable  :   this._fb.control(false),
    isActive    :   this._fb.control(true)
  });

  constructor(private _fb: FormBuilder) {}

  submitForm(): void {
    if (this.maestrasForm.valid) {

      console.log('submit', this.maestrasForm.value);
    } else {

      Object.values(this.maestrasForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
