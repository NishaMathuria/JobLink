import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamMemberPageComponent } from './add-team-member-page/add-team-member-page.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeesInfoComponent } from './employees-info/employees-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'profile/:id', component: EmployeeProfileComponent },
  { path: 'add-member/:id', component: AddTeamMemberPageComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent },
  { path: 'employeeinfo', component: EmployeesInfoComponent },
  { path: 'project-detail/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
