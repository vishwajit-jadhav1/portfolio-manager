

import { Routes } from "@angular/router";
import { NotFoundComponent } from "../not-found/not-found.component";
import { PeopleListComponent } from "../people-list/people-list.component";
import { UserDetailsComponent } from "src/app/pages/user-details/user-details.component";
import { MyProfileComponent } from "src/app/pages/my-profile/my-profile.component";
import { SecurityComponent } from "src/app/pages/security/security.component";
import { LicensesComponent } from "src/app/pages/licenses/licenses.component";
import { CommentsComponent } from "src/app/pages/comments/comments.component";
import { DocumentsComponent } from "src/app/pages/documents/documents.component";
import { TableComponent } from "../table/table.component";
import { TabsComponent } from "../tabs/tabs.component";

export const routes: Routes = [
  {
    path: 'dashboard', title: "Dashboard ", component: TabsComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'user-details/:id', title: "", component: UserDetailsComponent },
  { path: 'profile', title: "My Profile", component: MyProfileComponent },
  { path: 'security', title: "Security", component: SecurityComponent },
  { path: 'liencense', title: "Liencense", component: LicensesComponent },
  { path: 'comments', title: "Comments", component: CommentsComponent },
  { path: 'documents', title: "Documents", component: DocumentsComponent },



  { path: '**', component: NotFoundComponent },



]