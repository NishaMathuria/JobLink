import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailService {
  private url = 'http://localhost:4000/api';
  constructor(private httpClient: HttpClient) {}

  getProjectDetail() {
    return this.httpClient.get(this.url + '/project?page=');
  }

  createProject(data: any) {
    return this.httpClient.post(this.url + '/newProject', data);
  }

  getProjectById(id: any) {
    return this.httpClient.get(this.url + '/project/' + id);
  }
}
