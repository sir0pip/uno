import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeckAreaComponent } from './app-deck-area.component';

describe('AppDeckAreaComponent', () => {
  let component: AppDeckAreaComponent;
  let fixture: ComponentFixture<AppDeckAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDeckAreaComponent]
    });
    fixture = TestBed.createComponent(AppDeckAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
