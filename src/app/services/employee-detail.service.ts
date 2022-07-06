import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {


  private url = '';

  constructor(private httpClient: HttpClient) { }

  getEmployeeDetail() {
    return this.httpClient.get(this.url)
  }
}
