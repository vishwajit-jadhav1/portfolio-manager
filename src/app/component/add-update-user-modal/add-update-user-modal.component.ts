import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-update-user-modal',
  templateUrl: './add-update-user-modal.component.html',
  styleUrls: ['./add-update-user-modal.component.scss']
})
export class AddUpdateUserModalComponent implements OnInit {
  title = "Add User";

  id!: string | null
  model = {
    eMail: "",
    id: "",
    name: "",
    status: "",
    workPhone: "",
    _id: ""
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddUpdateUserModalComponent>,
    private service: AppService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (this.data.action == "edit") {
      this.model = this.data.data
      this.title = "Update User"
    }

  }

  onClose(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    let payload = {
      name: this.model.name,
      workPhone: this.model.workPhone,
      eMail: this.model.eMail,
      id: this.model.id,
      //  _id: this.model._id
    }
    //   await this.service.updateData(payload, 'cstPeoplePortfolioModelVIew', 'cstPeoplePortfolioVJQRDS',)
    await this.service.postData(payload, 'cstPeoplePortfolioModelVIew', 'cstPeoplePortfolioVJQRDS', 'createNewPortfolioRecordAGVJ', 'createNewPortfolioRecordVJ')

    this.dialogRef.close();
  }





}