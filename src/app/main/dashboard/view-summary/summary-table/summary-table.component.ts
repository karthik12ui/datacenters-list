import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { viewListConst } from '../../view-list/view-list.constant';
import { TableListModel } from '../../view-list/view-list.model';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss']
})
export class SummaryTableComponent implements OnInit {
  @Input() data;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listOfServers = new Array<TableListModel>();
  displayedColumns: string[] = viewListConst.serversColumns.columnProp
  dataSource = new MatTableDataSource<TableListModel>([]);
  displayList: boolean;
  constructor() { }

  ngOnInit() {
    this.appendData();
  }

  appendData() {
    this.listOfServers = new Array<TableListModel>();
    if(!!this.data && this.data !== null && this.data.length > 0) {
      this.data.forEach((li, index) => {
        const tableListModel = new TableListModel();
        tableListModel.hardDisk = li.hardDisk ? li.hardDisk : null;
        tableListModel.id = index;
        tableListModel.instances = li.instances ? li.instances : null;
        tableListModel.name = li.name ? li.name : null;
        tableListModel.ram = li.ram ? li.ram : null;
        tableListModel.status = li.status ? li.status : null;
        tableListModel.type = li.type ? li.type : null;
        this.listOfServers.push(tableListModel);
      });
      this.appendListToMatTable();
    }
  }
// ===========================================================================
// Append Data to table and set asceding sort by ID position defined in Const
// ==========================================================================
appendListToMatTable()  {
  if (this.listOfServers.length > 0) {
    this.dataSource = new MatTableDataSource<TableListModel>(this.listOfServers);
    this.dataSource.paginator = this.paginator;
    const sortState: Sort = {active: 'id', direction: 'asc'};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
    this.dataSource.sort = this.sort;
    this.displayList = true;
 }
}
}
