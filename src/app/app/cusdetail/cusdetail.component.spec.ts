import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusdetailComponent } from './cusdetail.component';

describe('CusdetailComponent', () => {
  let component: CusdetailComponent;
  let fixture: ComponentFixture<CusdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
