import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponentComponent } from './cart-item-component.component';

describe('CartItemComponentComponent', () => {
  let component: CartItemComponentComponent;
  let fixture: ComponentFixture<CartItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
