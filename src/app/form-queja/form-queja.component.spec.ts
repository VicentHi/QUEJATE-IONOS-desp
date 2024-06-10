import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuejaComponent } from './form-queja.component';

describe('FormQuejaComponent', () => {
  let component: FormQuejaComponent;
  let fixture: ComponentFixture<FormQuejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormQuejaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormQuejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
