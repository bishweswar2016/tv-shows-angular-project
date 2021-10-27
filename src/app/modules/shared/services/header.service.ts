import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(public httpClient:HttpClient) { }
  public searchShow(searchString){
      return this.httpClient.get(environment.apiUrl+"/search/shows?q="+searchString);
  }
}
