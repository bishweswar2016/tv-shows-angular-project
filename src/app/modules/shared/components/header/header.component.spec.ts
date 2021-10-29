import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { HeaderService } from "./../../services/header.service" 
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { Router } from '@angular/router';
import { ShowDetailComponent } from "./../../../show-detail/components/show-detail/show-detail.component"
import { FormsModule } from '@angular/forms';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers : [ HeaderService ],
      imports: [ FormsModule, RouterTestingModule.withRoutes([    
 { path: 'show/1', component: ShowDetailComponent }]),HttpClientTestingModule,RouterTestingModule],
 schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call searchTvShow', fakeAsync(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.debugElement.componentInstance;
    component.search = "stuck in the";
    
    component.searchTvShow();
    fixture.whenStable().then(() => {
    
    });


     
    expect(component.showSearch).toEqual(1);
  }))
  
  it('should call hideSearchResult and get response as 0', fakeAsync(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.debugElement.componentInstance;
    component.hideSearchResult();
    expect(component.showSearch).toEqual(0);
  })) 
  
  it('should call showSearchResult and get response as 1', fakeAsync(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.debugElement.componentInstance;
    component.showSearchResult();
    expect(component.showSearch).toEqual(1);
  }))
  
  it('should call goToShowDetail and rediect to details page', fakeAsync(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.ngZone.run(() => {
        component.goToShowDetail(1);
    });
    expect(component.showSearch).toEqual(0);
  }))
  
  it('should call trackById and return id', fakeAsync(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.debugElement.componentInstance;
    let index = 1;
    let data = {'id':15}
    let res = component.trackById(index,data);
    expect(res).toEqual(15);
  }))
  
  
});
