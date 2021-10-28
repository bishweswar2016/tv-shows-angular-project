import { TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should find a course by Title', () => {
        service.searchShow("stuck in the")
            .subscribe(course => {
                expect(course).toBeTruthy();
                expect(course[0].id).toBe(5264);
            },
            (error) => {    
                  const status = 500;
                  const statusText = 'Internal Server Error';
                  expect(error.status).toBe(status);
                  expect(error.statusText).toBe(statusText);
            }
    )});
});


