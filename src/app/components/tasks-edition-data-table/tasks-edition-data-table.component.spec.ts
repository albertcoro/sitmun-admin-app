import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksEditionDataTableComponent } from './tasks-edition-data-table.component';
import { SitmunFrontendGuiModule } from 'dist/sitmun-frontend-gui/';
import { ExternalConfigurationService } from 'src/app/ExternalConfigurationService';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material-module';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { CodeListService, TaskService, ServiceService,TranslationService,ResourceService,ExternalService } from 'dist/sitmun-frontend-core/';
import { HttpClientModule } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

describe('TasksEditionDataTableComponent', () => {
  let component: TasksEditionDataTableComponent;
  let fixture: ComponentFixture<TasksEditionDataTableComponent>;
  let taskService: TaskService;
  let codeListService: CodeListService;
  let translationService: TranslationService;
  let resourceService: ResourceService;
  let externalService: ExternalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksEditionDataTableComponent ],
      imports : [HttpClientTestingModule, HttpClientModule, SitmunFrontendGuiModule, RouterTestingModule, MaterialModule, RouterModule, MatIconTestingModule],
      providers: [CodeListService, TaskService,TranslationService,ResourceService,ExternalService,UtilsService,
        { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService }, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksEditionDataTableComponent);
    component = fixture.componentInstance;
    taskService= TestBed.inject(TaskService);
    codeListService= TestBed.inject(CodeListService);
    translationService= TestBed.inject(TranslationService);
    resourceService= TestBed.inject(ResourceService);
    externalService= TestBed.inject(ExternalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should instantiate taskService', () => {
    expect(taskService).toBeTruthy();
  });

  it('should instantiate codeListService', () => {
    expect(codeListService).toBeTruthy();
  });

  it('should instantiate translationService', () => {
    expect(translationService).toBeTruthy();
  });
 
  it('should instantiate resourceService', () => {
    expect(resourceService).toBeTruthy();
  });

  it('should instantiate externalService', () => {
    expect(externalService).toBeTruthy();
  });
});
