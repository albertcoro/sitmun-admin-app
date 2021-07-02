import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersPermitsFormComponent } from './layers-permits-form.component';
import { RouterModule } from '@angular/router';
import { CartographyGroupService, RoleService, CartographyService, CodeListService,TranslationService,ResourceService,ExternalService } from 'dist/sitmun-frontend-core/';
import { SitmunFrontendGuiModule } from 'dist/sitmun-frontend-gui/';
import { ExternalConfigurationService } from 'src/app/ExternalConfigurationService';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { UtilsService } from 'src/app/services/utils.service';


describe('LayersPermitsFormComponent', () => {
  let component: LayersPermitsFormComponent;
  let fixture: ComponentFixture<LayersPermitsFormComponent>;
  let roleService: RoleService;
  let cartographyService: CartographyService;
  let codeListService: CodeListService;
  let cartographyGroupService: CartographyGroupService;
  let translationService: TranslationService;
  let resourceService: ResourceService;
  let externalService: ExternalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayersPermitsFormComponent ],
      imports: [ RouterModule.forRoot([]), HttpClientTestingModule, SitmunFrontendGuiModule,
      RouterTestingModule, MaterialModule, RouterModule, MatIconTestingModule],
      providers: [CartographyGroupService, RoleService, CartographyService, CodeListService,TranslationService,ResourceService,ExternalService,UtilsService,
        { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService }, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersPermitsFormComponent);
    component = fixture.componentInstance;
    roleService= TestBed.inject(RoleService);
    cartographyService= TestBed.inject(CartographyService);
    codeListService= TestBed.inject(CodeListService);
    cartographyGroupService= TestBed.inject(CartographyGroupService);
    translationService= TestBed.inject(TranslationService);
    resourceService= TestBed.inject(ResourceService);
    externalService= TestBed.inject(ExternalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should instantiate roleService', () => {
    expect(roleService).toBeTruthy();
  });

  it('should instantiate cartographyService', () => {
    expect(cartographyService).toBeTruthy();
  });

  it('should instantiate codeListService', () => {
    expect(codeListService).toBeTruthy();
  });

  it('should instantiate cartographyGroupService', () => {
    expect(cartographyGroupService).toBeTruthy();
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
