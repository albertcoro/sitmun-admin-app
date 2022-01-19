import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersFormComponent } from './layers-form.component';
import { RouterModule } from '@angular/router';
import {  CartographyService, ServiceService, TerritoryTypeService, ConnectionService, TreeNodeService,
   TerritoryService, CartographyGroupService, CartographyAvailabilityService,CartographyParameterService,TranslationService,
   CodeListService,CartographyFilterService, GetInfoService, ResourceService,ExternalService, CartographyStyleService, CartographySpatialSelectionParameterService  } from  'dist/sitmun-frontend-core/';
import { SitmunFrontendGuiModule } from 'dist/sitmun-frontend-gui/';
import { ExternalConfigurationService } from 'src/app/ExternalConfigurationService';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LayersFormComponent', () => {
  let component: LayersFormComponent;
  let fixture: ComponentFixture<LayersFormComponent>;
  let cartographyService: CartographyService;
  let serviceService: ServiceService;
  let connectionService: ConnectionService;
  let codeListService: CodeListService;
  let cartographyGroupService: CartographyGroupService;
  let territoryTypeService: TerritoryTypeService;
  let treeNodeService: TreeNodeService;
  let territoryService: TerritoryService;
  let getInfoService: GetInfoService;
  let cartographyAvailabilityService: CartographyAvailabilityService;
  let cartographyParameterService: CartographyParameterService;
  let cartographySpatialSelectionParameterService: CartographySpatialSelectionParameterService;
  let cartographyFilterService: CartographyFilterService;
  let cartographyStyleService: CartographyStyleService;
  let translationService: TranslationService;
  let resourceService: ResourceService;
  let externalService: ExternalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayersFormComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterModule.forRoot([]), HttpClientTestingModule, SitmunFrontendGuiModule, 
      RouterTestingModule, MaterialModule, RouterModule, MatIconTestingModule],
      providers: [CartographyService, ServiceService, ConnectionService, TerritoryTypeService, 
        TreeNodeService, GetInfoService, CartographyStyleService, TerritoryService, CartographyGroupService, CartographyAvailabilityService, 
        CartographyParameterService, CartographySpatialSelectionParameterService, CodeListService, CartographyFilterService, TranslationService,ResourceService,ExternalService,
        { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService }, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersFormComponent);
    component = fixture.componentInstance;
    cartographyService= TestBed.inject(CartographyService);
    serviceService= TestBed.inject(ServiceService);
    connectionService= TestBed.inject(ConnectionService);
    codeListService= TestBed.inject(CodeListService);
    cartographyGroupService= TestBed.inject(CartographyGroupService);
    territoryTypeService= TestBed.inject(TerritoryTypeService);
    treeNodeService= TestBed.inject(TreeNodeService);
    territoryService= TestBed.inject(TerritoryService);
    getInfoService= TestBed.inject(GetInfoService);
    cartographyAvailabilityService= TestBed.inject(CartographyAvailabilityService);
    cartographyParameterService= TestBed.inject(CartographyParameterService);
    cartographySpatialSelectionParameterService= TestBed.inject(CartographySpatialSelectionParameterService);
    cartographyFilterService= TestBed.inject(CartographyFilterService);
    cartographyStyleService= TestBed.inject(CartographyStyleService);
    translationService= TestBed.inject(TranslationService);
    resourceService= TestBed.inject(ResourceService);
    externalService= TestBed.inject(ExternalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should instantiate cartographyService', () => {
    expect(cartographyService).toBeTruthy();
  });

  it('should instantiate serviceService', () => {
    expect(serviceService).toBeTruthy();
  });

  it('should instantiate connectionService', () => {
    expect(connectionService).toBeTruthy();
  });

  it('should instantiate codeListService', () => {
    expect(codeListService).toBeTruthy();
  });

  it('should instantiate cartographyGroupService', () => {
    expect(cartographyGroupService).toBeTruthy();
  });

  it('should instantiate territoryTypeService', () => {
    expect(territoryTypeService).toBeTruthy();
  });

  it('should instantiate treeNodeService', () => {
    expect(treeNodeService).toBeTruthy();
  });

  it('should instantiate territoryService', () => {
    expect(territoryService).toBeTruthy();
  });

  it('should instantiate getInfoService', () => {
    expect(getInfoService).toBeTruthy();
  });

  it('should instantiate cartographyAvailabilityService', () => {
    expect(cartographyAvailabilityService).toBeTruthy();
  });

  it('should instantiate cartographyParameterService', () => {
    expect(cartographyParameterService).toBeTruthy();
  });

  it('should instantiate cartographySpatialSelectionParameterService', () => {
    expect(cartographySpatialSelectionParameterService).toBeTruthy();
  });

  it('should instantiate cartographyFilterService', () => {
    expect(cartographyFilterService).toBeTruthy();
  });

  it('should instantiate cartographyStyleService', () => {
    expect(cartographyStyleService).toBeTruthy();
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

  it('form invalid when empty', () => {
    expect(component.layerForm.valid).toBeFalsy();
  }); 

  it('form invalid when mid-empty', () => {
    component.layerForm.patchValue({
      service: 1,
      layers: ['layer'],
      minimumScale: 10,
      maximumScale: 20,
      geometryType: 30,
      order: 1,
      transparency: '50',
      metadataURL: 'url',
      legendType: 1,
      legendUrl: 'url',
      source: 'source',
      description: 'description',
      datasetURL: 'dataset',
      applyFilterToGetMap: true,
      applyFilterToGetFeatureInfo: true,
      applyFilterToSpatialSelection: true,
      queryableFeatureEnabled: true,
      queryableFeatureAvailable: true,
      queryableLayers: true,
      thematic: true,
      blocked: true,
      selectableFeatureEnabled: true,
      spatialSelectionService: 1,
      selectableLayers: 'layerSelected',
      spatialSelectionConnection: 'connection',
      useAllStyles: true,
    })
    //Miss name
    expect(component.layerForm.valid).toBeFalsy();
  }); 

  it('form valid', () => {
    component.layerForm.patchValue({
      name: 'name',
      service: 1,
      layers: ['layer'],
      minimumScale: 10,
      maximumScale: 20,
      geometryType: 30,
      order: 1,
      transparency: '50',
      metadataURL: 'url',
      legendType: 1,
      legendUrl: 'url',
      source: 'source',
      description: 'description',
      datasetURL: 'dataset',
      applyFilterToGetMap: true,
      applyFilterToGetFeatureInfo: true,
      applyFilterToSpatialSelection: true,
      queryableFeatureEnabled: true,
      queryableFeatureAvailable: true,
      queryableLayers: true,
      thematic: true,
      blocked: true,
      selectableFeatureEnabled: true,
      spatialSelectionService: 1,
      selectableLayers: 'layerSelected',
      spatialSelectionConnection: 'connection',
      useAllStyles: true,
    })
    expect(component.layerForm.valid).toBeTruthy();
  }); 
});
