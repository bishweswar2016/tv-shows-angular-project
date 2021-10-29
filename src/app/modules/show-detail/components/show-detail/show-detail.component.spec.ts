import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShowDetailComponent } from './show-detail.component';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Show } from "./../../../core/interfaces/show";
import {ShowDetailService} from "./../../services/show-detail.service";

let mockData = {"id":214,"url":"https://www.tvmaze.com/shows/214/kingdom","name":"Kingdom","type":"Scripted","language":"English","genres":["Drama","Family","Sports"],"status":"Ended","runtime":60,"averageRuntime":60,"premiered":"2014-10-08","ended":"2017-08-02","officialSite":"https://www.directvpr.com/english/kingdom","schedule":{"time":"20:00","days":["Wednesday"]},"rating":{"average":7.8},"weight":94,"network":{"id":31,"name":"Audience Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":45148,"thetvdb":283761,"imdb":"tt3673794"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/116/291395.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/116/291395.jpg"},"summary":"<p><b>Kingdom</b> is a raw family drama set against the world of Mixed Martial Arts (MMA) in Venice, California. Alvey Kulina owns Navy St. MMA with the help of his girlfriend Lisa Prince. He is willing to go through extraordinary means to make sure his fighters are taken care of, but all of this responsibility comes at a steep price. He has complicated relationships with both of his sons, Jay and Nate, who are both struggling with their own identities and places within Alvey's life and gym.</p>","updated":1631678568,"_links":{"self":{"href":"https://api.tvmaze.com/shows/214"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1160582"}}};

class MockShowDetailService {
  getShowDetail() {
    return Observable.create((observer: Observer<Show>) => {
      observer.next(mockData);
    });
  }
}

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule ],
      providers: [
        { provide: ShowDetailService, useClass: MockShowDetailService }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  it('should call ngOnInit and check data', async(() => {
      fixture = TestBed.createComponent(ShowDetailComponent);
      component = fixture.componentInstance;
      component.ngOnInit();

      fixture.whenStable().then(() => {
        expect(component.showDetail).not.not.toBe(null);
      });
    }));
  
  
    
});
