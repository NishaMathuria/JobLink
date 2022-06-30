import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { EmployeeDetailService } from '../services/employee-detail.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers:[EmployeeDetailService]
})
export class EmployeeDetailComponent implements OnInit {

  // infoReceived1: string[] = [];
  // infoReceived2: string[] = [];
  // infoReceived3: string[] = [];
  
  // getInfoFromService1(){
  //   this.infoReceived1 = this.myservice.getInfo1()
  // }

  // getInfoFromService2(){
  //   this.infoReceived2 = this.myservice.getInfo2()
  // }

  // getInfoFromService3(){
  //   this.infoReceived3 = this.myservice.getInfo3()
  // }

  show=true;
  employeeDetail: any;
  
  constructor(private myservice: EmployeeDetailService) { }

  ngOnInit(): void {

    this.myservice.getEmployeeDetail().subscribe(response => {
      this.employeeDetail = response;
    })

  }

  showSheet(){
    this.show=!this.show
  }
}
