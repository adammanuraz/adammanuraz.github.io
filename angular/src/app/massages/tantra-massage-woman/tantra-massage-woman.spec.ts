import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TantraMassageWoman } from './tantra-massage-woman';

describe('TantraMassageWoman', () => {
  let component: TantraMassageWoman;
  let fixture: ComponentFixture<TantraMassageWoman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TantraMassageWoman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TantraMassageWoman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
