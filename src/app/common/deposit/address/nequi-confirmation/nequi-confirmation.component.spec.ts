import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NequiConfirmationComponent } from './nequi-confirmation.component'; 

describe('NequiConfirmationComponent', () => {
  let component: NequiConfirmationComponent;
  let fixture: ComponentFixture<NequiConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NequiConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NequiConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});