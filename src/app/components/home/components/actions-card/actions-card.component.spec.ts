import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsCardComponent } from './actions-card.component';

describe('ActionsCardComponent', () => {
  let component: ActionsCardComponent;
  let fixture: ComponentFixture<ActionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
