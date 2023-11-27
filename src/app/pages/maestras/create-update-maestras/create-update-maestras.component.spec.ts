import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateMaestrasComponent } from './create-update-maestras.component';

describe('CreateUpdateMaestrasComponent', () => {
  let component: CreateUpdateMaestrasComponent;
  let fixture: ComponentFixture<CreateUpdateMaestrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateMaestrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateMaestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
