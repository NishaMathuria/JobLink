import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = '';

  constructor(private httpClient: HttpClient) { }

  getProfile(){
    return this.httpClient.get(this.url)
  }

}