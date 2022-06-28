import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AddTeamMemberPageComponent } from './add-team-member-page/add-team-member-page.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateProjectComponent,
    ProjectDetailComponent,
    EmployeeProfileComponent,
    EmployeeDetailComponent,
    AddTeamMemberPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
