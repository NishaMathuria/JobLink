import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailService } from '../services/employee-detail.service';
import { ProjectDetailService } from '../services/project-detail.service';



@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  
  EmployeeDetail: any;

  constructor(private employeeService: EmployeeDetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any)=>{     
      this.employeeService.getEmployeeById(params.id).subscribe((response: any) => {
        this.EmployeeDetail = response.employee;
        console.log(this.EmployeeDetail);
      })
    })
  }

  // onRightClick(event: { preventDefault: () => void; }){
  //   event.preventDefault();
  // }

}
