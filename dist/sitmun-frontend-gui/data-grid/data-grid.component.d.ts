import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnApi, Module } from '@ag-grid-community/all-modules';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
export declare class DataGridComponent implements OnInit {
    dialog: MatDialog;
    translate: TranslateService;
    private elRef;
    _eventRefreshSubscription: any;
    _eventGetSelectedRowsSubscription: any;
    _eventGetAllRowsSubscription: any;
    _eventSaveAgGridStateSubscription: any;
    _eventModifyStatusOfSelectedCells: any;
    modules: Module[];
    UndeRedoActions: any;
    searchValue: string;
    gridApi: any;
    gridColumnApi: any;
    statusColumn: boolean;
    someColumnIsEditable: boolean;
    changesMap: Map<number, Map<string, number>>;
    params: any;
    rowData: any[];
    changeCounter: number;
    previousChangeCounter: number;
    redoCounter: number;
    modificationChange: boolean;
    undoNoChanges: boolean;
    gridOptions: any;
    someStatusHasChangedToDelete: boolean;
    domLayout: any;
    eventRefreshSubscription: Observable<boolean>;
    eventGetSelectedRowsSubscription: Observable<boolean>;
    eventGetAllRowsSubscription: Observable<string>;
    eventSaveAgGridStateSubscription: Observable<boolean>;
    eventModifyStatusOfSelectedCells: Observable<string>;
    eventAddItemsSubscription: Observable<boolean>;
    eventReplaceAllItemsSubscription: Observable<boolean>;
    frameworkComponents: any;
    components: any;
    columnDefs: any[];
    getAll: () => Observable<any>;
    discardChangesButton: boolean;
    discardNonReverseStatus: boolean;
    id: any;
    undoButton: boolean;
    defaultColumnSorting: string;
    redoButton: boolean;
    applyChangesButton: boolean;
    deleteButton: boolean;
    newButton: boolean;
    actionButton: boolean;
    addButton: boolean;
    registerButton: boolean;
    newStatusRegister: string;
    globalSearch: boolean;
    changeHeightButton: boolean;
    defaultHeight: any;
    themeGrid: any;
    singleSelection: boolean;
    nonEditable: boolean;
    title: string;
    hideExportButton: boolean;
    hideDuplicateButton: boolean;
    hideSearchReplaceButton: boolean;
    addFieldRestriction: any;
    allNewElements: any;
    currentData: Array<any>;
    fieldRestrictionWithDifferentName: string;
    remove: EventEmitter<any[]>;
    new: EventEmitter<number>;
    add: EventEmitter<any[]>;
    discardChanges: EventEmitter<any[]>;
    sendChanges: EventEmitter<any[]>;
    duplicate: EventEmitter<any[]>;
    getSelectedRows: EventEmitter<any[]>;
    getAllRows: EventEmitter<{
        data: any[];
        event: string;
    }>;
    getAgGridState: EventEmitter<any[]>;
    gridModified: EventEmitter<boolean>;
    constructor(dialog: MatDialog, translate: TranslateService, elRef: ElementRef);
    ngOnInit(): void;
    firstDataRendered(): void;
    onGridReady(params: any): void;
    getDatePicker(): () => void;
    areRowsSelected(): Boolean;
    emitSelectedRows(): void;
    emitAllRows(event: string): void;
    private getAllCurrentData;
    modifyStatusSelected(status?: string): void;
    saveAgGridState(): void;
    removeAgGridState(): void;
    getColumnKeysAndHeaders(columnkeys: Array<any>): String;
    exportData(): void;
    quickSearch(): void;
    getElements(): void;
    setSize(): void;
    replaceAllItems(newItems: any[]): void;
    addItems(newItems: any[]): void;
    private checkElementAllowedToAdd;
    changeHeight(value: any): void;
    removeData(): void;
    newData(): void;
    onAddButtonClicked(): void;
    onDuplicateButtonClicked(): void;
    applyChanges(): void;
    deleteChanges(): void;
    onFilterModified(): void;
    undo(): void;
    redo(): void;
    onCellEditingStopped(e: any): void;
    onCellValueChanged(params: any): void;
    modificationWithoutChanges(params: any): void;
    getColumnIndexByColId(api: ColumnApi, colId: string): number;
    paintCells(params: any, changesMap: Map<number, Map<string, number>>): void;
}
