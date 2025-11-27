import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominantMassageMan } from './dominant-massage-man';

describe('DominantMassageMan', () => {
  let component: DominantMassageMan;
  let fixture: ComponentFixture<DominantMassageMan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DominantMassageMan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominantMassageMan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
