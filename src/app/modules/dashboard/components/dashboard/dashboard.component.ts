import { Component, OnInit } from '@angular/core';
import { DashboardService } from "./../../services/dashboard.service"
import { CommonService } from "./../../../core/services/common.service"
import { ShowList } from "./../../../core/interfaces/show"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dashboardService:DashboardService, public commonService:CommonService) { }

  
  genreShowList: ShowList[];
  showList: ShowList[];
  genre: string = "";
  error:  string = "";
  
  ngOnInit(): void {
    this.dashboardService.getTvShows().subscribe((data: any[])=>{
        this.genre = "Thriller";
        this.showList = data;
        this.getTvShowsByGenre();
        this.error = "";
    },
    (error) => {                         
          this.genreShowList = [];
          this.error = "There is an error. Please try again later";
    })
  }
  
  getTvShowsByGenre(){
    this.genreShowList = this.commonService.getTvShowsByGenre(this.showList, this.genre);
  }
}
