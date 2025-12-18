import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingMasssage } from '././living-masssage';

describe('LivingMasssage', () => {
  let component: LivingMasssage;
  let fixture: ComponentFixture<LivingMasssage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivingMasssage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingMasssage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
