import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailService {
  private url = 'http://localhost:4000/api';
  employee = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  getEmployee() {
    return this.httpClient.get(this.url + '/employee');
  }

  getEmployeeDetail() {
    return this.httpClient.get(this.url + '/');
  }

  createEmployee(data: any, projectId: string) {
    return this.httpClient.post<any>(this.url + '/newEmployee', {
      data,
      projectId,
    });
  }

  getEmployeeById(id: any) {
    return this.httpClient.get(this.url + '/employee/' + id);
  }
}
