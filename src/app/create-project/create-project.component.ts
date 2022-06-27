import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  createForm!:FormGroup
  constructor(private fb:FormBuilder) {
    this.createForm = this.fb.group({
      projectTitle:['',Validators.required],
      projectDescription:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      projectLocation:['',Validators.required],
      selectSupervisor:['',Validators.required],
      expectedMember:['',Validators.required],
      addUser:['',Validators.required],
    })
   }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.createForm.value);
    this.createForm.reset()
  }

}
