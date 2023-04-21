import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMoviesComponent } from './container-movies.component';

describe('ContainerMoviesComponent', () => {
  let component: ContainerMoviesComponent;
  let fixture: ComponentFixture<ContainerMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
