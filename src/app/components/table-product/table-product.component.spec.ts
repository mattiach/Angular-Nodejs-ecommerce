import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductComponent } from './table-product.component';

describe('TableProductComponent', () => {
  let component: TableProductComponent;
  let fixture: ComponentFixture<TableProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
