import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRead3Component } from './product-read3.component';

describe('ProductRead3Component', () => {
  let component: ProductRead3Component;
  let fixture: ComponentFixture<ProductRead3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRead3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRead3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
