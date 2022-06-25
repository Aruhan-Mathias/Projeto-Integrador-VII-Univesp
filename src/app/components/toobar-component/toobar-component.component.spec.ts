import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobarComponentComponent } from './toobar-component.component';

describe('ToobarComponentComponent', () => {
  let component: ToobarComponentComponent;
  let fixture: ComponentFixture<ToobarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToobarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToobarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
