import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailService {

  constructor(public httpClient:HttpClient) { }
  public getShowDetail(id){
      return this.httpClient.get(environment.apiUrl+"shows/"+id);
  }
}
