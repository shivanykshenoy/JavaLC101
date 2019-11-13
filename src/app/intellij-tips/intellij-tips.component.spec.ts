import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellijTipsComponent } from './intellij-tips.component';

describe('IntellijTipsComponent', () => {
  let component: IntellijTipsComponent;
  let fixture: ComponentFixture<IntellijTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntellijTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntellijTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
