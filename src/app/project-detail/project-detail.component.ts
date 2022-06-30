import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { response } from 'express';
import { ProjectDetailService } from '../services/project-detail.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  closeResult: string | undefined;
  ProjectDetail: any;
  myservice: any;

  constructor(private modalService: NgbModal,myservice:ProjectDetailService) { }

  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

    this.myservice.getProjectDetail().subscribe((response: any) => {
      this.ProjectDetail = response;
    })
  }

}
