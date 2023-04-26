import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { userData } from 'src/app/app.types';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentsComponent } from '../add-documents/add-documents.component';
import { baseUrl2 } from 'src/app/component/util/utils';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  displayedColumns: string[] =
    ['_id',
      'documentName',
      'description',
      'documentStatus',
      'createdDateTime',
      'openNewTab',
    ];

  image: any
  dataSource: any
  id: any

  paginationOption = [5, 10, 20, 50]

  constructor(
    private service: AppService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id
    this.getData(id)
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getData(id: any) {
    const serverResponse: any = await this.service.getApiData1(id, "cstPeoplePortfolioAssociatedVJQRDS", "cstDocumentAssociatedToPeopleVJQDS")
    this.dataSource = new MatTableDataSource<userData>(serverResponse);
    this.dataSource.paginator = this.paginator;
  }

  addNewDocument() {
    const dialogRef = this.dialog.open(AddDocumentsComponent, {
      width: '40%',
      data: { id: this.id }
    });
    dialogRef.afterClosed().subscribe(updatedData => {
      // this.dataSource = updatedData.refresh.data
      this.paginationOption = [...this.paginationOption,]
      this.dataSource = new MatTableDataSource<userData>(updatedData.refresh.data);
      this.dataSource.paginator = this.paginator;
    })

  }

  showImage(imageLocation: any) {
    if (imageLocation)
      this.image = baseUrl2 + "/html/en/default/images/getImageThumbnail.jsp?fileLoc=" + imageLocation + "&offlineCache=true";       // to load image thumbnail
    window.open(this.image)
    return this.image

  }

  // dImage(f: any) {
  //   window.open(f)
  // }


}
