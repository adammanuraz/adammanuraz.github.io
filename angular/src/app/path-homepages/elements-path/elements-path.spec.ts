import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsPath } from './elements-path';

describe('ElementsPath', () => {
  let component: ElementsPath;
  let fixture: ComponentFixture<ElementsPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
