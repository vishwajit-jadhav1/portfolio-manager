import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './component/sidebar/sidebar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DeleteModalComponent } from './component/delete-modal/delete-modal.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from './component/tabs/tabs.component';
// import { TableComponent } from './component/table/table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SecurityComponent } from './pages/security/security.component';
import { LicensesComponent } from './pages/licenses/licenses.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    DeleteModalComponent,
    SnackbarComponent,
    TabsComponent,
    // TableComponent,
    PeopleListComponent,
    PeoplesComponent,
    UserDetailsComponent,
    MyProfileComponent,
    SecurityComponent,
    LicensesComponent,
    CommentsComponent,
    DocumentsComponent],

  imports: [BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
