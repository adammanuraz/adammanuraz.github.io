import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingMeditations } from './living-meditations';

describe('LivingMeditations', () => {
  let component: LivingMeditations;
  let fixture: ComponentFixture<LivingMeditations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivingMeditations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingMeditations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
