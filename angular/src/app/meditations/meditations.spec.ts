import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meditations } from './meditations';

describe('Meditations', () => {
  let component: Meditations;
  let fixture: ComponentFixture<Meditations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meditations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meditations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
