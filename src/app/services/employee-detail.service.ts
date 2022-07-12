import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailService {
  getEmployeeDetail() {
    throw new Error('Method not implemented.');
  }
  private url = 'http://localhost:4000/api';
  employee = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  getEmployee() {
    return this.httpClient.get(this.url + '/employee');
  }
  createEmployee(data: any) {
    return this.httpClient.post<any>(this.url + '/newEmployee', data);
  }

  getEmployeeById(id: any){
    return this.httpClient.get(this.url + '/employee/'+id);
  }
}
