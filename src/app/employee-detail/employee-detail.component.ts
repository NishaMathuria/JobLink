import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { EmployeeDetailService } from '../services/employee-detail.service';
import { ProjectDetailService } from '../services/project-detail.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers:[EmployeeDetailService]
})
export class EmployeeDetailComponent implements OnInit {

  show=true;
  show1=false;
  show2=false;
  employeeDetail: any;
  ProjectDetail: any;
  
  constructor(private myservice: EmployeeDetailService, private myProjectService: ProjectDetailService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any)=>{     
      this.myProjectService.getProjectById(params.id).subscribe((response: any) => {
        this.ProjectDetail = response.project;
        console.log(this.ProjectDetail);
      })
    })
    this.myservice.getEmployee().subscribe(response => {
      this.employeeDetail = response;
    })

  }

  showSheet(){
    this.show=!this.show;
    this.show1=false;
    this.show2=false;
  }
  showSheet1(){
    this.show1=!this.show1;
    this.show=false;
    this.show2=false;
  }
  showSheet2(){
    this.show2=!this.show2;
    this.show1=false;
    this.show=false;
  }

  onClick(id:any){
    this.router.navigate(['profile/' +id])
  }
}
