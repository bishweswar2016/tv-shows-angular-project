import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should get Tv Shows By genre', () => {
        var data = [{"id":214,"genres":["Drama","Family","Sports"],"rating":{"average":7.8}},{"id":209,"genres":["Drama","Comedy","Sports"],"rating":{"average":7.3}},{"id":210,"genres":["Drama","Adventure","Science-Fiction"],"rating":{"average":8.4}}];
        
        var sports_data = [{"id":214,"genres":["Drama","Family","Sports"],"rating":{"average":7.8}},{"id":209,"genres":["Drama","Comedy","Sports"],"rating":{"average":7.3}}];
        
        var genre = "Sports"
        var service_data = service.getTvShowsByGenre(data, genre);
        
        expect(service_data).toBeTruthy();
        expect(service_data).toEqual(sports_data);    
    });
    
    it('should get Tv Sort by rating', () => {
        var data = [{"id":1,"rating":{"average":7.8}}, {"id":3,"rating":{"average":8.2}}];
        
        var sports_data = [{"id":3,"rating":{"average":8.2}}, {"id":1,"rating":{"average":7.8}}];
        
        var service_data = service.getTvShowsOrderByRating(data);
        expect(service_data).toEqual(sports_data);    
        
    });
    
    
    
});
