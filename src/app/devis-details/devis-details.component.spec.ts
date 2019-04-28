import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisDetailsComponent } from './devis-details.component';

describe('DevisDetailsComponent', () => {
  let component: DevisDetailsComponent;
  let fixture: ComponentFixture<DevisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
