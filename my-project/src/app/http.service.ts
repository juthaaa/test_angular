import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  baseUrl = 'http://localhost:4200/';

  constructor(private http:  HttpClient) { }

  get (endpoint){
    return this.http.get(this.baseUrl + endpoint);
  }

  post (endpoint, params){
    return this.http.post(this.baseUrl + endpoint, params);
  }
}
