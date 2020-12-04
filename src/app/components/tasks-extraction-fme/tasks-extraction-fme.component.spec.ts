import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksExtractionFmeComponent } from './tasks-extraction-fme.component';
import { RouterModule } from '@angular/router';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('TasksExtractionFmeComponent', () => {
  let component: TasksExtractionFmeComponent;
  let fixture: ComponentFixture<TasksExtractionFmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksExtractionFmeComponent ],
      imports: [ RouterModule, MatIconTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksExtractionFmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
