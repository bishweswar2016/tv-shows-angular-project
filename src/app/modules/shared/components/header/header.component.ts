import { Component, OnInit } from '@angular/core';
import { HeaderService } from "./../../services/header.service" 
import { Router } from '@angular/router';
import { ShowList } from "./../../../core/interfaces/show"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public headerService:HeaderService, public router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  searchResult: ShowList[] = [];
  search: string = "";
  showSearch: number= 0;
  searchError: string = "";
  ngOnInit(): void {
    
  }
  
  searchTvShow() {
    this.showSearch = 1;
    this.headerService.searchShow(this.search).subscribe((data: any[])=>{
        this.searchResult = data;
        this.searchError = "";
    },
    (error) => {                         
          this.searchResult = [];
          this.searchError = "Theare is an error. Please try again later.";
    })
  }
  
  trackById(index: number, show: any): string {
    return show.id;
  }
  
  hideSearchResult() {
    this.showSearch = 0;
  }
  
  showSearchResult() {
    this.showSearch = 1;
  }
  
  goToShowDetail(showId) {
    this.router.navigateByUrl('/show/'+showId);
    this.showSearch = 0;
  }
  

}
