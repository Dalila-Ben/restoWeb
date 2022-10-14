import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitdejComponent } from './petitdej.component';

describe('PetitdejComponent', () => {
  let component: PetitdejComponent;
  let fixture: ComponentFixture<PetitdejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitdejComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitdejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
