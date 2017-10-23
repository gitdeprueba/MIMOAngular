import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesLauraComponent } from './detalles-laura.component';

describe('DetallesLauraComponent', () => {
  let component: DetallesLauraComponent;
  let fixture: ComponentFixture<DetallesLauraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesLauraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesLauraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
