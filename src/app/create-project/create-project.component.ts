import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { ProfileService } from '../services/profile.service';
import { ProjectDetailService } from '../services/project-detail.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  createForm!:FormGroup
  myservice: any;
  profile: any;
  form: null | undefined;

  constructor(private fb:FormBuilder,myservice:ProfileService,private projectService:ProjectDetailService) {

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
    this.projectService.createProject(this.createForm.value).subscribe((data)=>{
      console.log(data);
      
    })
    // this.createForm.reset()
  }

}
