import { NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { routes } from './component/sidebar/sidebar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './component/sidebar/sidebar.component';
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
import { CommentsComponent } from './pages/comment/comments-list/comments.component';
import { DocumentsComponent } from './pages/document/documents/documents.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { TableComponent } from './component/table/table.component';




@NgModule({
  declarations: [
    TabsComponent,
    PeoplesComponent,
    UserDetailsComponent,
    MyProfileComponent,
    SecurityComponent,
    LicensesComponent,
    CommentsComponent,
    PeopleListComponent,
    TableComponent,
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
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatGridListModule,
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  constructor(private router: Router) {
    router.events.subscribe((val) => {
    });

  }
  ngOnInit(): void {

  }
  //   ngOnChange(): void {
  //     console.log(this.activatedRoute.snapshot.paramMap.get('id'), " this.activatedRoute.snapshot.paramMap.get('id');")
  //   }
}
