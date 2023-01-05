import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidedbarComponent } from './sidedbar.component';

describe('SidedbarComponent', () => {
  let component: SidedbarComponent;
  let fixture: ComponentFixture<SidedbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidedbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
