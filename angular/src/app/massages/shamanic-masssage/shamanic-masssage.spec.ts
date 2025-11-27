import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamanicMasssage } from './shamanic-masssage';

describe('ShamanicMasssage', () => {
  let component: ShamanicMasssage;
  let fixture: ComponentFixture<ShamanicMasssage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShamanicMasssage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShamanicMasssage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
