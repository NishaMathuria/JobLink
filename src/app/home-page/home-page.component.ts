import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetailService } from '../services/project-detail.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private projectService:ProjectDetailService, private router: Router) { }

  projects:any;
  ngOnInit(): void {
    this.projectService.getProjectDetail().subscribe((data:any)=>{
      console.log(data);
      this.projects = data.projects;
    })
  }
  onClick(id: string){
    this.router.navigate(['employee-detail/'+id]);
  }

}
