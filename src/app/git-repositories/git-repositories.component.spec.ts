import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRepositoriesComponent } from './git-repositories.component';

describe('GitRepositoriesComponent', () => {
  let component: GitRepositoriesComponent;
  let fixture: ComponentFixture<GitRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
