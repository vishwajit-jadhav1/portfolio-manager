import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddUpdateUserModalComponent } from './component/add-update-user-modal/add-update-user-modal.component';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TabsComponent } from './component/tabs/tabs.component';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { MatListModule } from '@angular/material/list';
import { AddCommentsComponent } from './pages/comment/add-comments/add-comments.component';
import { AddDocumentsComponent } from './pages/document/add-documents/add-documents.component';
import { TableComponent } from './component/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotFoundComponent,
    // DeleteModalComponent,
    AddUpdateUserModalComponent,
    AddCommentsComponent,
    AddDocumentsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSidenavModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatListModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
