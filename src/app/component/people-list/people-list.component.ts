import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

import { SimpleChanges, Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateUserModalComponent } from '../add-update-user-modal/add-update-user-modal.component';
import { userData } from 'src/app/app.types';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  displayedColumns: string[] = ['id', 'name', 'eMail', 'workPhone', 'status', 'action'];
  dataSource: any
  isIedit: boolean = true
  hideEditIcon: boolean = false

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
    this.hideEditIcon = changes['tab'].currentValue == "Retired"
    if (changes['tab'].currentValue == "Active") {
      this.getData("cstPeoplePortfolioActiveVJQRDS")
    }
    else if (changes['tab'].currentValue == "Retired") {
      this.getData("cstPeoplePortfolioRetiredVJQRDS")
    }
    else {
      this.getData("cstPeoplePortfolioVJQRDS")

    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getData(dataSource: string) {
    const dd = await this.service.getApiData(dataSource)


    this.paginationOption = [...this.paginationOption, dd.data.length]
    this.dataSource = new MatTableDataSource<userData>(dd.data);
    this.dataSource.paginator = this.paginator;
  }



  editRecord(enterAnimationDuration: string, exitAnimationDuration: string, data: userData): void {
    this.isIedit = false
    let dialogRef = this.dialog.open(AddUpdateUserModalComponent, {
      width: '40%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { data, action: "edit" }
    });
    dialogRef.afterClosed().subscribe(updatedData => {
      // this.dataSource = updatedData.refresh.data
      this.paginationOption = [...this.paginationOption,]
      this.dataSource = new MatTableDataSource<userData>(updatedData.refresh.data);
      this.dataSource.paginator = this.paginator;
    })

  }

  editContact(data: userData) {
    if (this.isIedit) {
      this.router.navigate(['user', data._id,], { state: { data: data } });
    }
    else {
      this.isIedit = true

    }
  }

  addNewUser() {
    let dialogRef = this.dialog.open(AddUpdateUserModalComponent, {
      width: '40%',
      data: { action: "add" }
    });
    dialogRef.afterClosed().subscribe(updatedData => {
      // this.dataSource = updatedData.refresh.data
      this.paginationOption = [...this.paginationOption,]
      this.dataSource = new MatTableDataSource<userData>(updatedData.refresh.data);
      this.dataSource.paginator = this.paginator;
    })

  }
}





