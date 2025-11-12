import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcervoComponents } from './acervo-components';

describe('AcervoComponents', () => {
  let component: AcervoComponents;
  let fixture: ComponentFixture<AcervoComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcervoComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcervoComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
