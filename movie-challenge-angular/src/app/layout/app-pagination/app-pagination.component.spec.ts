import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaginationComponent } from './app-pagination.component';

describe('AppPaginationComponent', () => {
  let component: AppPaginationComponent;
  let fixture: ComponentFixture<AppPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPaginationComponent]
    });
    fixture = TestBed.createComponent(AppPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
