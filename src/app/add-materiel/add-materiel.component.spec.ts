import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterielComponent } from './add-materiel.component';

describe('AddMaterielComponent', () => {
  let component: AddMaterielComponent;
  let fixture: ComponentFixture<AddMaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
