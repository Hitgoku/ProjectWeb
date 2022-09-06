import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakComponent } from './pak.component';

describe('PakComponent', () => {
  let component: PakComponent;
  let fixture: ComponentFixture<PakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
