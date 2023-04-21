import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

import { SimpleChanges, Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateUserModalComponent } from '../add-update-user-modal/add-update-user-modal.component';
// import { userData } from 'src/app/app.types';

/**
 * @title Table with pagination
 */

interface PeriodicElement {
  name: string;
  id: number;
  address: number;
  status: string;
  _id: number
}

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  displayedColumns: string[] = ['id', 'name', 'eMail', 'workPhone', 'status', 'action'];
  // dataSource: PeriodicElement[]  = []
  dataSource: any


  paginationOption = [5, 10, 20, 50, 100]
  @Input() tab = '';
  constructor(public http: HttpClient,
    private service: AppService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {
  }


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['tab'].currentValue == "Active") {
      this.getData("cstPeoplePortfolioActiveVJQRDS", "cstPeoplePortfolioModelVIew")
    }
    else if (changes['tab'].currentValue == "Retired") {
      this.getData("cstPeoplePortfolioRetiredVJQRDS", "cstPeoplePortfolioModelVIew")
    }
    else {
      this.getData("cstPeoplePortfolioVJQRDS", "cstPeoplePortfolioModelVIew")

    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getData(dataSource: string, modelView: string) {
    const dd = await this.service.getApiData(dataSource, modelView)
    this.paginationOption = [...this.paginationOption, dd.length]
    this.dataSource = new MatTableDataSource<PeriodicElement>(dd);
    this.dataSource.paginator = this.paginator;
  }

  // editRecord(data: any) {
  //   localStorage.setItem("editData", JSON.stringify(data))
  //   this.router.navigate(['update-user', data._id]);
  // }

  editRecord(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(AddUpdateUserModalComponent, {
      width: '40%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { data, action: "edit" }
    });
    console.log(data, 'kkk')


  }

  editContact(data: any) {
    console.log("clicked")
    this.router.navigate(['user-details', data._id]);
  }

  addNewUser() {
    this.dialog.open(AddUpdateUserModalComponent, {
      width: '40%',
      data: { action: "add" }
    });

  }
}





