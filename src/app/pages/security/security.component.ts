import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { userData } from 'src/app/app.types';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  displayedColumns: string[] =
    ['_id',
      'reviewStatus',
      'userGroup',
      'systemOrganization',
      'systemLocation',
      'systemGeoGraphy',];
  dataSource: any

  paginationOption = [5, 10, 20, 50]

  tabeData = [
    { value: '_id', title: "Id" },
    { value: 'reviewStatus', title: "Review Status" },
    { value: 'userGroup', title: "User Group" },
    { value: 'systemOrganization', title: "System Organization" },
    { value: 'systemLocation', title: "System Location" },
    { value: 'systemGeoGraphy', title: "System GeoGraphy" },
  ]

  constructor(
    private service: AppService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData(id)
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getData(id: any) {
    const dd: any = await this.service.getApiData1(id, "cstPeoplePortfolioAssociatedVJQRDS", "cstSecurityGroupAssociatedToPeopleVJQDS")
    this.dataSource = new MatTableDataSource<userData>(dd);
    this.dataSource.paginator = this.paginator;
  }
}
