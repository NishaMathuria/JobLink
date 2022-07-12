import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
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

  constructor(private modalService: NgbModal,private projectService:ProjectDetailService, private router: ActivatedRoute) { }

  
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
    this.router.params.subscribe((params: any)=>{
      this.projectService.getProjectById(params.id).subscribe((response: any) => {
        this.ProjectDetail = response.project;
        console.log(response);
      })
    });
  }

}
