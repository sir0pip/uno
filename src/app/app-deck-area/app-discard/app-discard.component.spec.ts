import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDiscardComponent } from './app-discard.component';

describe('AppDiscardComponent', () => {
  let component: AppDiscardComponent;
  let fixture: ComponentFixture<AppDiscardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDiscardComponent]
    });
    fixture = TestBed.createComponent(AppDiscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
