import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manu } from './manu';

describe('Manu', () => {
  let component: Manu;
  let fixture: ComponentFixture<Manu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Manu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
