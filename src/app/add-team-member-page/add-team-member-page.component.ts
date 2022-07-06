import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team-member-page',
  templateUrl: './add-team-member-page.component.html',
  styleUrls: ['./add-team-member-page.component.css']
})
export class AddTeamMemberPageComponent implements OnInit {

  uploadField  = document.getElementById("file");

  value: any;
  files: any;
  
  
  createForm!:FormGroup
  constructor(private fb:FormBuilder) {
    this.createForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phoneNumber:['',Validators.required],
      emailAddress:['',Validators.required],
      docFile:['',Validators.required],
      welder:['',Validators.required],
      fitter:['',Validators.required],
      rigger:['',Validators.required],
      sacffolder:['',Validators.required],
      instrumentTech:['',Validators.required],
      election:['',Validators.required],
      mechanic:['',Validators.required],
      craneOperator:['',Validators.required],
    })
   }
  
  

  ngOnInit(): void {
  }

  onSave(){
    console.log(this.createForm.value);
    this.createForm.reset();
  }
}


