import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawTokenComponent } from './withdrawToken.component'; 

describe('WithdrawTokenComponent', () => {
  let component: WithdrawTokenComponent;
  let fixture: ComponentFixture<WithdrawTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdrawTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});