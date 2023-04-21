
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/app.service';

interface PeriodicElement {
  name: string;
  id: number;
  address: number;
  status: string;
  _id: number
}
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  activeTab = ''
  handelTabChange(value: string) {
    this.activeTab = value
    console.log("vv", value)
    // alert('jj')
  }


}
