import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NequiComponent } from './nequi.component';

describe('NequiComponent', () => {
  let component: NequiComponent;
  let fixture: ComponentFixture<NequiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NequiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NequiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
