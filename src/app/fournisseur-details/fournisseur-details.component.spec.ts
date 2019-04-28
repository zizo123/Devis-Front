import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurDetailsComponent } from './fournisseur-details.component';

describe('FournisseurDetailsComponent', () => {
  let component: FournisseurDetailsComponent;
  let fixture: ComponentFixture<FournisseurDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
