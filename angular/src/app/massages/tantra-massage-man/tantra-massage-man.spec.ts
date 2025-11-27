import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TantraMassageMan } from './tantra-massage-man';

describe('TantraMassageMan', () => {
  let component: TantraMassageMan;
  let fixture: ComponentFixture<TantraMassageMan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TantraMassageMan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TantraMassageMan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
