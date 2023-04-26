

import { Routes } from "@angular/router";
import { NotFoundComponent } from "../not-found/not-found.component";
import { PeopleListComponent } from "../people-list/people-list.component";
import { UserDetailsComponent } from "src/app/pages/user-details/user-details.component";
import { MyProfileComponent } from "src/app/pages/my-profile/my-profile.component";
import { SecurityComponent } from "src/app/pages/security/security.component";
import { LicensesComponent } from "src/app/pages/licenses/licenses.component";
import { TabsComponent } from "../tabs/tabs.component";
import { CommentsComponent } from "src/app/pages/comment/comments-list/comments.component";
import { DocumentsComponent } from "src/app/pages/document/documents/documents.component";

export const routes: Routes = [
  {
    path: 'dashboard', title: "Dashboard ", component: TabsComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'user/:id', title: "", component: UserDetailsComponent },
  { path: 'user/my-profile/:id', title: "My Profile", component: MyProfileComponent },
  { path: 'user/security/:id', title: "Security", component: SecurityComponent },
  { path: 'user/liencense/:id', title: "Liencense", component: LicensesComponent },
  { path: 'user/comments/:id', title: "Comments", component: CommentsComponent },
  { path: 'user/documents/:id', title: "Documents", component: DocumentsComponent },
  { path: '**', component: NotFoundComponent },
]