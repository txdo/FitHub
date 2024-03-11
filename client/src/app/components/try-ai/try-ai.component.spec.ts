import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryAiComponent } from './try-ai.component';

describe('TryAiComponent', () => {
  let component: TryAiComponent;
  let fixture: ComponentFixture<TryAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryAiComponent]
    });
    fixture = TestBed.createComponent(TryAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
