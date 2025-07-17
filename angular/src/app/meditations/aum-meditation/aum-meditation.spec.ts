import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AumMeditation } from './aum-meditation';

describe('AumMeditation', () => {
  let component: AumMeditation;
  let fixture: ComponentFixture<AumMeditation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AumMeditation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AumMeditation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
