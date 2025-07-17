import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowTouch } from './shadow-touch';

describe('ShadowTouch', () => {
  let component: ShadowTouch;
  let fixture: ComponentFixture<ShadowTouch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowTouch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowTouch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
