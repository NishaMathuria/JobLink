import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailService } from '../services/employee-detail.service';
import { ProjectDetailService } from '../services/project-detail.service';

import * as moment from 'moment';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  createForm!: FormGroup;
  profile: any;
  currentDate!: string;
  employees: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeDetailService,
    private projectService: ProjectDetailService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      projectLocation: ['', Validators.required],
      selectSupervisor: ['', Validators.required],
      expectedMember: ['', Validators.required],
      addUser: ['', Validators.required],
    });

    const date = moment();
    this.currentDate = date.format('YYYY-MM-D');
  }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((data: any) => {
      data.employees.forEach((element: Array<any>) => {
        this.employees.push(element);
      });
    });
  }

  onSubmit() {
    this.projectService
      .createProject(this.createForm.value)
      .subscribe((data: any) => {
        console.log(data);
        this.createForm.reset();
        this.router.navigate(['']);
      });
  }
}
