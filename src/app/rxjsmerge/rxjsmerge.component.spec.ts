import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsmergeComponent } from './rxjsmerge.component';

describe('RxjsmergeComponent', () => {
  let component: RxjsmergeComponent;
  let fixture: ComponentFixture<RxjsmergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsmergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsmergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
