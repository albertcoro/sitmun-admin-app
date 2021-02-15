import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, TerritoryService, RoleService, TaskGroupService, TaskAvailabilityService, Role, Task, Territory } from 'dist/sitmun-frontend-core/';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../../services/utils.service';
import { environment } from 'src/environments/environment';
import { config } from 'src/config';
import { map } from 'rxjs/operators';
import { DialogGridComponent } from 'dist/sitmun-frontend-gui/';
import { MatDialog } from '@angular/material/dialog';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-tasks-download-form',
  templateUrl: './tasks-download-form.component.html',
  styleUrls: ['./tasks-download-form.component.scss']
})
export class TasksDownloadFormComponent implements OnInit {


 
  //Form
  taskGroups: Array<any> = [];
  formTasksDownload: FormGroup;
  taskDownloadToEdit;
  taskDownloadID = -1;
  dataLoaded: Boolean = false;
  
  //Grids
  themeGrid: any = config.agGridTheme;

  columnDefsRoles: any[];
  getAllElementsEventRoles: Subject<boolean> = new Subject <boolean>();
  dataUpdatedEventRoles: Subject<boolean> = new Subject<boolean>();

  columnDefsTerritories: any[];
  getAllElementsEventTerritories: Subject<boolean> = new Subject <boolean>();
  dataUpdatedEventTerritories: Subject<boolean> = new Subject<boolean>();

  //Dialog
  columnDefsRolesDialog: any[];
  addElementsEventRoles: Subject<any[]> = new Subject <any[]>();
  columnDefsTerritoriesDialog: any[];
  addElementsEventTerritories: Subject<any[]> = new Subject <any[]>();




  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public taskService: TaskService,
    public roleService: RoleService,
    public territoryService: TerritoryService,
    public taskGroupService: TaskGroupService,
    private taskAvailabilityService: TaskAvailabilityService,
    private http: HttpClient,
    public utils: UtilsService
  ) {
    this.initializeTasksDownloadForm();
  }

  ngOnInit(): void {

    const promises: Promise<any>[] = [];

    promises.push(new Promise((resolve, reject) => {
      this.taskGroupService.getAll().subscribe(
        resp => {
          this.taskGroups.push(...resp);
          resolve(true);
        }
      );
    }));

    Promise.all(promises).then(() => {
    this.activatedRoute.params.subscribe(params => {
      this.taskDownloadID = +params.id;
      if (this.taskDownloadID !== -1) {
        console.log(this.taskGroups);

        this.taskService.get(this.taskDownloadID).subscribe(
          resp => {
            console.log(resp);
            this.taskDownloadToEdit = resp;
            this.formTasksDownload.setValue({
              id: this.taskDownloadID,
              name: this.taskDownloadToEdit.name,
              taskGroup: this.taskDownloadToEdit.groupId,
              path: ' ',
              extent: '',
              _links: this.taskDownloadToEdit._links
            });

            this.dataLoaded=true;
          },
          error => {

          }
        );
      }
      else {
        this.dataLoaded = true;
        this.formTasksDownload.patchValue({
          taskGroup: this.taskGroups[0].id,
        });
      }

    },
      error => {

      });
    });


      this.columnDefsRoles = [
      this.utils.getSelCheckboxColumnDef(),
        this.utils.getIdColumnDef(),
        { headerName: this.utils.getTranslate('tasksDownloadEntity.name'), field: 'name' },  
        { headerName: this.utils.getTranslate('tasksDownloadEntity.status'), field: 'status', editable:false },  
      ];
  
      this.columnDefsTerritories = [
        this.utils.getSelCheckboxColumnDef(),
        { headerName: 'Id', field: 'territoryId', editable: false },
        { headerName: this.utils.getTranslate('tasksDownloadEntity.name'), field: 'territoryName' },
        { headerName: this.utils.getTranslate('tasksDownloadEntity.status'), field: 'status', editable:false },  

  
      ];

      this.columnDefsRolesDialog = [
        this.utils.getSelCheckboxColumnDef(),
        { headerName: 'ID', field: 'id', editable: false },
        { headerName: this.utils.getTranslate('tasksDownloadEntity.name'), field: 'name', editable: false },
        { headerName: this.utils.getTranslate('tasksDownloadEntity.note'), field: 'description', editable: false, },
      ];

      this.columnDefsTerritoriesDialog = [
        this.utils.getSelCheckboxColumnDef(),
        { headerName: 'ID', field: 'id', editable: false },
        { headerName: this.utils.getTranslate('tasksDownloadEntity.name'), field: 'name',  editable: false  },
        { headerName: this.utils.getTranslate('tasksDownloadEntity.code'), field: 'code',  editable: false  },
      ];



  }


  initializeTasksDownloadForm(): void {

    this.formTasksDownload = new FormGroup({
      id: new FormControl(null, []),
      name: new FormControl(null, []),
      taskGroup: new FormControl(null, []),
      path: new FormControl(null, []),
      extent: new FormControl(null, []),
      _links: new FormControl(null, []),
    })
  }


  
  // ******** Roles ******** //
  getAllRoles = () => {

    if(this.taskDownloadID == -1)
    {
      const aux: Array<any> = [];
      return of(aux);
    }
    
    return (this.http.get(`${this.taskDownloadToEdit._links.roles.href}`))
    .pipe( map( data =>  data['_embedded']['roles']) );

  }


  getAllRowsRoles(data: any[] )
  {
    let rolesModified = [];
    let rolesToPut = [];
    data.forEach(role => {
      if (role.status === 'pendingModify') {rolesModified.push(role) }
      if(role.status!== 'pendingDelete') {rolesToPut.push(role._links.self.href) }
    });
    console.log(rolesModified);
    this.updateRoles(rolesModified, rolesToPut);
  }

  updateRoles(rolesModified: Role[], rolesToPut: Role[])
  {
    const promises: Promise<any>[] = [];
    rolesModified.forEach(role => {
      promises.push(new Promise((resolve, reject) => { this.roleService.update(role).subscribe((resp) => { resolve(true) }) }));
    });
    Promise.all(promises).then(() => {
      let url=this.taskDownloadToEdit._links.roles.href.split('{', 1)[0];
      this.utils.updateUriList(url,rolesToPut, this.dataUpdatedEventRoles)
    });
  }


  // ******** Territories  ******** //
  getAllTerritories = () => {

    if(this.taskDownloadID == -1)
    {
      const aux: Array<any> = [];
      return of(aux);
    }

    var urlReq=`${this.taskDownloadToEdit._links.availabilities.href}`
    if(this.taskDownloadToEdit._links.availabilities.templated){
      var url=new URL(urlReq.split("{")[0]);
      url.searchParams.append("projection","view")
      urlReq=url.toString();
    }

    return (this.http.get(urlReq))
    .pipe( map( data =>  data['_embedded']['task-availabilities']) );

    
    
  }


  getAllRowsTerritories(data: any[] )
  {
    let territoriesToCreate = [];
    let territoriesToDelete = [];
    data.forEach(territory => {
      territory.task= this.taskDownloadToEdit;
      if (territory.status === 'pendingCreation') {
        let index= data.findIndex(element => element.territoryId === territory.territoryId && !element.new)
        if(index === -1)
        {
          territoriesToCreate.push(territory)
          territory.new=false;
        }
       }
      if(territory.status === 'pendingDelete' && territory._links) {territoriesToDelete.push(territory) }
    });
    const promises: Promise<any>[] = [];
    territoriesToCreate.forEach(newElement => {
      promises.push(new Promise((resolve, reject) => { this.taskAvailabilityService.save(newElement).subscribe((resp) => { resolve(true) }) }));
    });

    territoriesToDelete.forEach(deletedElement => {
      promises.push(new Promise((resolve, reject) => {this.taskAvailabilityService.remove(deletedElement).subscribe((resp) => { resolve(true) }) }));
      
    });

    Promise.all(promises).then(() => {
      this.dataUpdatedEventTerritories.next(true);
    });
	
  }
  
  // ******** Roles Dialog  ******** //

  getAllRolesDialog = () => {
    return this.roleService.getAll();
  }

  openRolesDialog(data: any) {

    const dialogRef = this.dialog.open(DialogGridComponent, {panelClass:'gridDialogs'});
    dialogRef.componentInstance.getAllsTable=[this.getAllRolesDialog];
    dialogRef.componentInstance.singleSelectionTable=[false];
    dialogRef.componentInstance.columnDefsTable=[this.columnDefsRolesDialog];
    dialogRef.componentInstance.themeGrid=this.themeGrid;
    dialogRef.componentInstance.title='Roles';
    dialogRef.componentInstance.titlesTable=['Roles'];
    dialogRef.componentInstance.nonEditable=false;
    


    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(result.event==='Add') {
          this.addElementsEventRoles.next(result.data[0])
        }
      }

    });

  }

    // ******** Territories Dialog  ******** //

    getAllTerritoriesDialog = () => {
      return this.territoryService.getAll();
    }

    openTerritoriesDialog(data: any) {

      const dialogRef = this.dialog.open(DialogGridComponent, {panelClass:'gridDialogs'});
      dialogRef.componentInstance.getAllsTable=[this.getAllTerritoriesDialog];
      dialogRef.componentInstance.singleSelectionTable=[false];
      dialogRef.componentInstance.columnDefsTable=[this.columnDefsTerritoriesDialog];
      dialogRef.componentInstance.themeGrid=this.themeGrid;
      dialogRef.componentInstance.title='Territories';
      dialogRef.componentInstance.titlesTable=['Territories'];
      dialogRef.componentInstance.nonEditable=false;
      
  
  
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          if(result.event==='Add') {
            this.addElementsEventTerritories.next(this.adaptFormatTerritories(result.data[0]))
          }
        }
  
      });
  
    }

    adaptFormatTerritories(dataToAdapt: Territory[])
    {
      let newData: any[] = [];
      
      dataToAdapt.forEach(element => {
        let item = {
          id: null,
          territoryCode: element.code,
          territoryName: element.name,
          territoryId: element.id,
          createdDate: element.createdDate,
          owner: null,
          territory: element,
          new: true
        }
        newData.push(item);
        
      });

      return newData;
    }

  onSaveButtonClicked(): void {

    if(this.formTasksDownload.valid)
    {
  
      //TODO Update cartography when save works
      console.log(this.formTasksDownload.value)
      let taskGroup= this.taskGroups.find(x => x.id===this.formTasksDownload.value.taskGroup )
      // this.updateCartography(this.currentCartography)
      var taskObj: Task= new Task();
      taskObj.name= this.formTasksDownload.value.name;
      taskObj.id= this.formTasksDownload.value.id;
      taskObj.group= taskGroup;
      // taskObj.path= taskGroup;
      // taskObj.extent= taskGroup;
      taskObj._links= this.formTasksDownload.value._links;
  
      this.taskService.save(this.formTasksDownload.value)
      .subscribe(resp => {
        this.taskDownloadToEdit= resp;
        this.taskDownloadID=this.taskDownloadToEdit.id;
        this.formTasksDownload.patchValue({
          id: resp.id,
          _links: resp._links
        })
        this.getAllElementsEventTerritories.next(true);
        this.getAllElementsEventRoles.next(true);
    
      },
      error => {
        console.log(error);
      })
    }

    else {
      this.utils.showRequiredFieldsError();
    }

  }



}
