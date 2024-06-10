import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerQuejasComponent } from './ver-quejas.component';

describe('VerQuejasComponent', () => {
  let component: VerQuejasComponent;
  let fixture: ComponentFixture<VerQuejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerQuejasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
