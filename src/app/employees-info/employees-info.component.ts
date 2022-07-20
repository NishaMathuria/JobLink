import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeDetailService } from '../services/employee-detail.service';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})
export class EmployeesInfoComponent implements OnInit {

  getEmployeeDetail:any;
  users:any;
  p: number = 1;
  total : number = 0;

  constructor(private route: ActivatedRoute,private employeeService:EmployeeDetailService, private router:Router) { }

  employees:any;
  ngOnInit(): void {
    this.employeeService.getEmployeeDetail().subscribe((data:any) => {
      console.log(data);
      this.employees = data.employees;
    }) 
  }
  // employee(){
  //   this.employeeService.getEmployeeDetail().subscribe((data:any) => {
  //     console.log(data);
  //     this.employees = data.employees;
  //   }) 
  // }

  pageChangeEvent(event:number){
    this.p = event;
    this.getEmployeeDetail();
  }
}

