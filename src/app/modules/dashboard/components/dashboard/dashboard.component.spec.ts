import { async, ComponentFixture, TestBed, fakeAsync, tick  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

 
  
  it('should call getTvShowsByGenre and get response as array', fakeAsync(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.debugElement.componentInstance;
    component.showList = [{"id":214,"url":"https://www.tvmaze.com/shows/214/kingdom","name":"Kingdom","type":"Scripted","language":"English","genres":["Drama","Family","Sports"],"status":"Ended","runtime":60,"averageRuntime":60,"premiered":"2014-10-08","ended":"2017-08-02","officialSite":"https://www.directvpr.com/english/kingdom","schedule":{"time":"20:00","days":["Wednesday"]},"rating":{"average":7.8},"weight":94,"network":{"id":31,"name":"Audience Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":45148,"thetvdb":283761,"imdb":"tt3673794"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/116/291395.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/116/291395.jpg"},"summary":"<p><b>Kingdom</b> is a raw family drama set against the world of Mixed Martial Arts (MMA) in Venice, California. Alvey Kulina owns Navy St. MMA with the help of his girlfriend Lisa Prince. He is willing to go through extraordinary means to make sure his fighters are taken care of, but all of this responsibility comes at a steep price. He has complicated relationships with both of his sons, Jay and Nate, who are both struggling with their own identities and places within Alvey's life and gym.</p>","updated":1631678568,"_links":{"self":{"href":"https://api.tvmaze.com/shows/214"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1160582"}}},{"id":209,"url":"https://www.tvmaze.com/shows/209/survivors-remorse","name":"Survivor's Remorse","type":"Scripted","language":"English","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":30,"averageRuntime":30,"premiered":"2014-10-04","ended":"2017-10-15","officialSite":"http://www.starz.com/originals/survivorsremorse/featured","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":7.3},"weight":79,"network":{"id":17,"name":"STARZ","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":{"id":46,"name":"Starz Play","country":null},"dvdCountry":null,"externals":{"tvrage":37574,"thetvdb":282402,"imdb":"tt3231022"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/1/3168.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/1/3168.jpg"},"summary":"<p><b>Survivor's Remorse</b> follows Cam Calloway, a basketball phenom in his early 20's who is suddenly thrust into the limelight after signing a multi-million dollar contract with a professional basketball team in Atlanta. Cam, along with his cousin, and confidant Reggie Vaughn, move to Georgia to start Cam's journey to success. The two confront the challenges of carrying opportunistic family members and their strong ties to the impoverished community that they come from. Cam, Reggie, and an unforgettable group of characters wrestle with the rewards and pitfalls of stardom, love, and loyalty.</p>","updated":1617724841,"_links":{"self":{"href":"https://api.tvmaze.com/shows/209"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1269443"}}},{"id":210,"url":"https://www.tvmaze.com/shows/210/doctor-who","name":"Doctor Who","type":"Scripted","language":"English","genres":["Drama","Adventure","Science-Fiction"],"status":"Running","runtime":null,"averageRuntime":48,"premiered":"2005-03-26","ended":null,"officialSite":"http://www.bbc.co.uk/programmes/b006q2x0","schedule":{"time":"","days":["Sunday"]},"rating":{"average":8.4},"weight":100,"network":{"id":12,"name":"BBC One","country":{"name":"United Kingdom","code":"GB","timezone":"Europe/London"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":3332,"thetvdb":78804,"imdb":"tt0436992"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/364/911688.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/364/911688.jpg"},"summary":"<p>Adventures across time and space with the time travelling alien and companions.</p>","updated":1635088582,"_links":{"self":{"href":"https://api.tvmaze.com/shows/210"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1810771"},"nextepisode":{"href":"https://api.tvmaze.com/episodes/2190801"}}}];
    component.genre = "Sports";
    
    var sports_data = [{"id":214,"url":"https://www.tvmaze.com/shows/214/kingdom","name":"Kingdom","type":"Scripted","language":"English","genres":["Drama","Family","Sports"],"status":"Ended","runtime":60,"averageRuntime":60,"premiered":"2014-10-08","ended":"2017-08-02","officialSite":"https://www.directvpr.com/english/kingdom","schedule":{"time":"20:00","days":["Wednesday"]},"rating":{"average":7.8},"weight":94,"network":{"id":31,"name":"Audience Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":45148,"thetvdb":283761,"imdb":"tt3673794"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/116/291395.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/116/291395.jpg"},"summary":"<p><b>Kingdom</b> is a raw family drama set against the world of Mixed Martial Arts (MMA) in Venice, California. Alvey Kulina owns Navy St. MMA with the help of his girlfriend Lisa Prince. He is willing to go through extraordinary means to make sure his fighters are taken care of, but all of this responsibility comes at a steep price. He has complicated relationships with both of his sons, Jay and Nate, who are both struggling with their own identities and places within Alvey's life and gym.</p>","updated":1631678568,"_links":{"self":{"href":"https://api.tvmaze.com/shows/214"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1160582"}}},{"id":209,"url":"https://www.tvmaze.com/shows/209/survivors-remorse","name":"Survivor's Remorse","type":"Scripted","language":"English","genres":["Drama","Comedy","Sports"],"status":"Ended","runtime":30,"averageRuntime":30,"premiered":"2014-10-04","ended":"2017-10-15","officialSite":"http://www.starz.com/originals/survivorsremorse/featured","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":7.3},"weight":79,"network":{"id":17,"name":"STARZ","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":{"id":46,"name":"Starz Play","country":null},"dvdCountry":null,"externals":{"tvrage":37574,"thetvdb":282402,"imdb":"tt3231022"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/1/3168.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/1/3168.jpg"},"summary":"<p><b>Survivor's Remorse</b> follows Cam Calloway, a basketball phenom in his early 20's who is suddenly thrust into the limelight after signing a multi-million dollar contract with a professional basketball team in Atlanta. Cam, along with his cousin, and confidant Reggie Vaughn, move to Georgia to start Cam's journey to success. The two confront the challenges of carrying opportunistic family members and their strong ties to the impoverished community that they come from. Cam, Reggie, and an unforgettable group of characters wrestle with the rewards and pitfalls of stardom, love, and loyalty.</p>","updated":1617724841,"_links":{"self":{"href":"https://api.tvmaze.com/shows/209"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1269443"}}}];
    
    component.getTvShowsByGenre();
    tick(1000);
    expect(component.genreShowList).toEqual(sports_data);
  }))
  
  
});
