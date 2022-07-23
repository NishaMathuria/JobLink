import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetailService } from '../services/project-detail.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  users: any;
  p: number = 1;
  total: number = 0;
  projects: any;
  statusColor: Number = 0;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectService.getProjectDetail(0).subscribe((data: any) => {
      console.log(data);
      this.projects = data.projects;
    });
  }
  onClick(id: string) {
    this.router.navigate(['project-detail/' + id]);
  }

  pageChangeEvent(event: number) {
    this.p = event;
  }
  onClickItem(status: Number) {
    this.statusColor = status;
    this.projectService.getProjectDetail(status).subscribe((data: any) => {
      console.log(data);
      this.projects = data.projects;
    });
  }
}
