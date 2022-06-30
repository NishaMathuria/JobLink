import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  // info1: string[] = []
  // info2: string[] = []
  // info3: string[] = []

  // getInfo1():string[]{
  //   return this.info1
  // }

  // getInfo2():string[]{
  //   return this.info2
  // }

  // getInfo3():string[]{
  //   return this.info3
  // }

  private url = '';

  constructor(private httpClient: HttpClient) { }

  getEmployeeDetail() {
    return this.httpClient.get(this.url)
  }
}
