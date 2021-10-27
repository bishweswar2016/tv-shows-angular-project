import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public httpClient:HttpClient) { }
  
  public getTvShows(){
      return this.httpClient.get(environment.apiUrl+"shows");
  }
}
