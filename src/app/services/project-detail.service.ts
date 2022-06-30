import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {

  private url = '';
  constructor(private httpClient: HttpClient) { }

  getProjectDetail(){
    return this.httpClient.get(this.url)
  }
}
