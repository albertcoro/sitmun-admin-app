import { ServiceFormComponent } from '../service-form/service-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { ServiceService, ServiceParameterService, CartographyService, CodeListService } from '@sitmun/frontend-core';
import { ExternalConfigurationService } from 'src/app/ExternalConfigurationService';
import { HttpClientModule } from '@angular/common/http';
import { SitmunFrontendGuiModule } from '@sitmun/frontend-gui';
import { RouterTestingModule } from '@angular/router/testing';

describe('ServiceFormComponent', () => {
  let component: ServiceFormComponent;
  let fixture: ComponentFixture<ServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFormComponent ],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), HttpClientModule,
      SitmunFrontendGuiModule, RouterTestingModule, MaterialModule, RouterModule, MatIconTestingModule],
      providers: [ServiceService, ServiceParameterService, CartographyService, CodeListService,
        { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService }, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
