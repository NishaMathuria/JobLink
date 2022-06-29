import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamMemberPageComponent } from './add-team-member-page/add-team-member-page.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'profile', component: EmployeeProfileComponent },
  { path: 'add-member', component: AddTeamMemberPageComponent },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: 'project-detail', component: ProjectDetailComponent },
  { path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
