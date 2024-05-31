import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieListComponent } from './app-movie-list.component';

describe('AppMovieListComponent', () => {
  let component: AppMovieListComponent;
  let fixture: ComponentFixture<AppMovieListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMovieListComponent]
    });
    fixture = TestBed.createComponent(AppMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
