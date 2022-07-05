import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { ProfileService } from '../services/profile.service';

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

  constructor(private fb:FormBuilder,myservice:ProfileService) {

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

    // this.myservice.getProfile().subscribe((response: any) => {
    //   this.profile = response;
    // })
  }

  onSubmit(){
    console.log(this.createForm.value);
    this.createForm.reset()
  }

  // const form = document.getElementById('create-project')
  // form.addEventListener('submit',projectUser)
  // function projectUser(event) {
  //   event.preventDefault()
  // }

}
