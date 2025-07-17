import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowPath } from './shadow-path';

describe('ShadowPath', () => {
  let component: ShadowPath;
  let fixture: ComponentFixture<ShadowPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
