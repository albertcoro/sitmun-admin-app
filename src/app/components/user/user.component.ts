import { Component, OnInit } from '@angular/core';
import { UserService,User } from 'dist/sitmun-frontend-core/';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { config } from 'src/config';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from 'dist/sitmun-frontend-gui/';
 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  saveAgGridStateEvent: Subject<boolean> = new Subject<boolean>();
  dataUpdatedEvent: Subject<boolean> = new Subject<boolean>();
  themeGrid: any = config.agGridTheme;
  columnDefs: any[];

  constructor(public dialog: MatDialog,
    public userService: UserService,
    private utils: UtilsService,
    private router: Router
  ) {

  }


  ngOnInit() {

    var columnEditBtn=config.editBtnColumnDef;
    columnEditBtn['cellRendererParams']= {
      clicked: this.newData.bind(this)
    }

    this.columnDefs = [
      config.selCheckboxColumnDef,
      columnEditBtn,
      { headerName: 'Id', field: 'id', editable: false },
      { headerName: this.utils.getTranslate('userEntity.user'), field: 'username' },
      { headerName: this.utils.getTranslate('userEntity.firstname'), field: 'firstName' },
      { headerName: this.utils.getTranslate('userEntity.lastname'), field: 'lastName' },
      /*{
        headerName: this.utils.getTranslate('userEntity.administrator'), field: 'administrator', editable: false,
        cellRenderer: 'btnCheckboxRendererComponent', floatingFilterComponent: 'btnCheckboxFilterComponent',
        floatingFilterComponentParams: { suppressFilterButton: true },
      },*/
     /* {
       headerName: this.utils.getTranslate('userEntity.blocked'), field: 'blocked', editable: false,
        cellRenderer: 'btnCheckboxRendererComponent', floatingFilterComponent: 'btnCheckboxFilterComponent',
        floatingFilterComponentParams: { suppressFilterButton: true },
      },*/
      // { headerName: this.utils.getTranslate('status'), field: 'estat'},
    ];
  }

  getAllUsers = () => {

    return this.userService.getAll();
  }

  newData(id: any) {
    this.saveAgGridStateEvent.next(true);
    this.router.navigate(['user', id, 'userForm']);
  }

  applyChanges(data: User[]) {
    const promises: Promise<any>[] = [];
    data.forEach(user => {
      promises.push(new Promise((resolve, reject) => { this.userService.update(user).subscribe((resp) => { resolve(true) }) }));
      Promise.all(promises).then(() => {
        this.dataUpdatedEvent.next(true);
      });
    });
  }
  add(data: User[]) {
    const promises: Promise<any>[] = [];
    data.forEach(user => {
      user.id = null;
      user.username = 'copia_'.concat(user.username)
      promises.push(new Promise((resolve, reject) => { this.userService.create(user).subscribe((resp) => { resolve(true) }) }));
      Promise.all(promises).then(() => {
        this.dataUpdatedEvent.next(true);
      });
    });

  }

  removeData(data: User[]) {

    const dialogRef = this.dialog.open(DialogMessageComponent);
    dialogRef.componentInstance.title=this.utils.getTranslate("caution");
    dialogRef.componentInstance.message=this.utils.getTranslate("removeMessage");
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(result.event==='Accept') {  
          const promises: Promise<any>[] = [];
          data.forEach(user => {
            promises.push(new Promise((resolve, reject) => {​​​​​​​ this.userService.delete(user).subscribe((resp) =>{​​​​​​​resolve(true)}​​​​​​​)}​​​​​​​));
            Promise.all(promises).then(() => {
              this.dataUpdatedEvent.next(true);
            });
          });
       }
      }
    });



  }


}
