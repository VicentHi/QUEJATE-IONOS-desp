import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTemasComponent } from './buscar-temas.component';

describe('BuscarTemasComponent', () => {
  let component: BuscarTemasComponent;
  let fixture: ComponentFixture<BuscarTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarTemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
