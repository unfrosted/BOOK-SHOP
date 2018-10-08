import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessOrderFormComponentComponent } from './process-order-form-component.component';

describe('ProcessOrderFormComponentComponent', () => {
  let component: ProcessOrderFormComponentComponent;
  let fixture: ComponentFixture<ProcessOrderFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessOrderFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessOrderFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
