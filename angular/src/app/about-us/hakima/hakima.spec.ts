import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hakima } from './hakima';

describe('Hakima', () => {
  let component: Hakima;
  let fixture: ComponentFixture<Hakima>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hakima]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hakima);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
