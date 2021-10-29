import { Component, OnInit } from '@angular/core';
import {ShowDetailService} from "./../../services/show-detail.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from "./../../../core/interfaces/show"
@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  constructor(public showDetailService:ShowDetailService, public activatedRoute: ActivatedRoute, public router:Router) { }
  showDetail: Show[];
  
  ngOnInit(): void {
      let showId = this.activatedRoute.snapshot.params.id;
      this.showDetailService.getShowDetail(showId).subscribe((data: Show[])=>{
            this.showDetail = data;
      },
      (error) => {                         
          this.router.navigateByUrl('/');
       })
  }

}
