import { Component, Input, ViewChild } from '@angular/core';
import { tableDataType, userData } from 'src/app/app.types';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() dataSource: any;
  @Input() displayedColumns: string[] = [];
  @Input() tabeData: tableDataType[] = []

}



