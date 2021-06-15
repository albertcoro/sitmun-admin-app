import { TerritoryFormComponent } from './territory-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material-module';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { TerritoryService, TerritoryGroupTypeService, CartographyAvailabilityService, TaskAvailabilityService , CartographyService, UserService,
   RoleService, TaskService,UserConfigurationService, CodeListService, TranslationService, ResourceService, ExternalService, UserPositionService  } from 'dist/sitmun-frontend-core/';
import { ExternalConfigurationService } from 'src/app/ExternalConfigurationService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SitmunFrontendGuiModule } from 'dist/sitmun-frontend-gui/';
import { RouterTestingModule } from '@angular/router/testing';

describe('TerritoryFormComponent', () => {
  let component: TerritoryFormComponent;
  let fixture: ComponentFixture<TerritoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerritoryFormComponent ],
      imports: [HttpClientTestingModule, SitmunFrontendGuiModule, RouterTestingModule,
        RouterModule.forRoot([]), MaterialModule, MatIconTestingModule],
     providers: [TerritoryService, UserService, RoleService,  TerritoryGroupTypeService, CartographyService, TaskAvailabilityService,
       TaskService, UserPositionService, CartographyAvailabilityService, CodeListService,UserConfigurationService,TranslationService, ResourceService, ExternalService,
       { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService }, ]
   })
   .compileComponents();
 });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 