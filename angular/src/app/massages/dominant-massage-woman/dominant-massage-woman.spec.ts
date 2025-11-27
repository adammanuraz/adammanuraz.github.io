import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominantMassageWoman } from './dominant-massage-woman';

describe('DominantMassageWoman', () => {
  let component: DominantMassageWoman;
  let fixture: ComponentFixture<DominantMassageWoman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DominantMassageWoman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominantMassageWoman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
