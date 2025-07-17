import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyPath } from './energy-path';

describe('EnergyPath', () => {
  let component: EnergyPath;
  let fixture: ComponentFixture<EnergyPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
