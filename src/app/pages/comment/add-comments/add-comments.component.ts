import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { baseUrl2 } from 'src/app/component/util/utils';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.scss']
})
export class AddCommentsComponent {
  model = {
    comment: ""
  }
  id: any
  uploadedFileInfo: any
  extensionsList: any
  maxFileSize: any
  photo = ""
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    public dialogRef: MatDialogRef<AddCommentsComponent>,
    private service: AppService,
    private http: HttpClient
  ) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    const responseData = await this.service.postData({
      comment: this.model.comment, photo: this.photo
    }, 'cstPeoplePortfolioAssociatedVJQRDS', 'cstCommentAGVj', 'createNewComment', 'cstCommentsAssociatedToPeopleVJQDS', this.data.id)
    this.dialogRef.close(responseData);

  }

  async aploadDocs(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file: File = target.files[0]

      if (file) {


        // get server maxFileSize that can be uploaded
        this.maxFileSize = await this.http.get(baseUrl2 + "/p/fileupload/maximumFileSizeForUpload", { withCredentials: true }).toPromise() // Promise is attached so that HTTP call can be async and it will wait for response.
          .catch((error) => { console.log(error); return; }); // HTTP response throws error.

        // get server list of file extension that should be excluded while upload.
        // its the list file extension that is not accepted by server.
        this.extensionsList = await this.http.get(baseUrl2 + "/p/fileupload/validImageExtensions", { withCredentials: true }).toPromise() // Promise is attached so that HTTP call can be async and it will wait for response.
          .catch((error) => { console.log(error); return; }); // HTTP response throws error.

        // If selected file size is within server size limit and selected file extension is not present in the excluded list. Upload the file.
        if (file.size <= this.maxFileSize.maximumFileSizeForUpload && this.extensionsList.excludedExtensions.indexOf('.' + file.name.split('.').pop()) == -1) {
          // File upload needs FormData Object.
          const formData = new FormData();
          // Attaching file to Form Data
          formData.append("file", file);
          // Sending server request to upload file.
          this.uploadedFileInfo = await this.http.post(baseUrl2 + "/p/fileupload/uploadimage", formData, { withCredentials: true }).toPromise() // Promise is attached so that HTTP call can be async and it will wait for response.
            .catch((error) => { console.log(error); return; }); // HTTP response throws error.
          // Updating img path after server response.
          this.photo = this.uploadedFileInfo.fileURL;

        }
      }
      // Else file is not selected.
      else {
        this.photo = '';         // Clear file image source.
      }
    }
  }

}
