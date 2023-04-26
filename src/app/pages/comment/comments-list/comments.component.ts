import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { userData } from 'src/app/app.types';
import { AddCommentsComponent } from '../add-comments/add-comments.component';
import { MatDialog } from '@angular/material/dialog';
import { baseUrl2 } from 'src/app/component/util/utils';

interface commentData {
  comment: string,
  commentType: string,
  createdDateTime: Date,
  id: number,
  name: string,
  photo: string,
  _id: number,
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  dataSource: any
  id: any
  photo: any


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


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getData(id: any) {
    this.dataSource = await this.service.getApiData1(id, "cstPeoplePortfolioAssociatedVJQRDS", "cstCommentsAssociatedToPeopleVJQDS")

    console.log(this.dataSource, "this.dataSource");
  }

  addNewComment() {
    const dialogRef = this.dialog.open(AddCommentsComponent, {
      width: '40%',
      data: { id: this.id }
    })
    dialogRef.afterClosed().subscribe(updatedData => {

      this.dataSource = updatedData.refresh.data

    })

  }
  showImage(imageLocation: any) {
    if (imageLocation)
      this.photo = baseUrl2 + "/html/en/default/images/getImageThumbnail.jsp?fileLoc=" + imageLocation + "&offlineCache=true";       // to load photo thumbnail
    //  window.open(this.photo)
    return this.photo

  }

}
