import { tick, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowDetailService } from './show-detail.service';

describe('ShowDetailService', () => {
  let service: ShowDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ShowDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should get data from getShowDetail',  fakeAsync(() => {
        expect(service.getShowDetail(1)).not.toBeNull(); 
  }));
});
