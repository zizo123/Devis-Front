import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisIdComponent } from './devis-id.component';

describe('DevisIdComponent', () => {
  let component: DevisIdComponent;
  let fixture: ComponentFixture<DevisIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
