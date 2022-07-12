import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {

  private url = '';
  constructor(private httpClient: HttpClient) { }

  getProjectDetail(page: number){
    return this.httpClient.get('http://localhost:4000/api/project' + '?page=' + page)
  }

  createProject(data:any){
    return this.httpClient.post('http://localhost:4000/api/newProject',data)
  }

  getProjectById(id: any){
    return this.httpClient.get('http://localhost:4000/api/project/'+id);
  }

}
