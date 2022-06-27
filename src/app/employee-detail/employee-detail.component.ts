import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  show=true;
  constructor() { }

  ngOnInit(): void {
  }

  showSheet(){
    this.show=!this.show
  }
}
