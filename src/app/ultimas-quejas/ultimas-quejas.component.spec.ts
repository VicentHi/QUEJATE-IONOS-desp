import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasQuejasComponent } from './ultimas-quejas.component';

describe('UltimasQuejasComponent', () => {
  let component: UltimasQuejasComponent;
  let fixture: ComponentFixture<UltimasQuejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UltimasQuejasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltimasQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
