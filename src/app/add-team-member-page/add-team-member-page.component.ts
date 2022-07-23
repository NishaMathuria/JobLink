import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetailService } from '../services/employee-detail.service';

@Component({
  selector: 'app-add-team-member-page',
  templateUrl: './add-team-member-page.component.html',
  styleUrls: ['./add-team-member-page.component.css'],
})
export class AddTeamMemberPageComponent implements OnInit {
  value: any;
  files: any;
  employee: any;
  projectId!: string;
  invalidSize: boolean = false;

  createForm!: FormGroup;
  warning: boolean | undefined;
  constructor(
    private fb: FormBuilder,
    private myService: EmployeeDetailService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      docFile: ['', Validators.required],
      welder: ['', Validators.required],
      fitter: ['', Validators.required],
      rigger: ['', Validators.required],
      sacffolder: ['', Validators.required],
      instructionTech: ['', Validators.required],
      election: ['', Validators.required],
      mechanic: ['', Validators.required],
      craneOperator: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.projectId = params.id;
    });

    this.myService.employee.subscribe((currentEmployee) => {
      this.employee = currentEmployee;
      console.log(this.employee);
    });
  }

  onSave() {
    console.log(this.createForm.value);
    this.myService
      .createEmployee(this.createForm.value, this.projectId)
      .subscribe((response) => {
        // console.log(response);
        this.myService.employee.next(response);
        this.createForm.reset();
        this.router.navigate(['/employeeinfo']);
      });
  }

  onChange() {
    const element = document.getElementById('fileSelector') as HTMLInputElement;
    const files = element.files as FileList;
    if (
      Math.round(files[0].size / 1024) >= 4096 &&
      files[0].type != 'application/pdf'
    ) {
      this.createForm.patchValue({
        docFile: '',
      });
    }
  }
}
