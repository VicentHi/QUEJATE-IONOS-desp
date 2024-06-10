import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaComponent } from './queja.component';

describe('QuejaComponent', () => {
  let component: QuejaComponent;
  let fixture: ComponentFixture<QuejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuejaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
