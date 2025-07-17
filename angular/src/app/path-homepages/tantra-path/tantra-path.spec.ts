import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TantraPath } from './tantra-path';

describe('TantraPath', () => {
  let component: TantraPath;
  let fixture: ComponentFixture<TantraPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TantraPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TantraPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
