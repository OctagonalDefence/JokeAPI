import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JokeApiService } from './joke-api.service';

describe('JokeApiService', () => {
  let service: JokeApiService;
  let httpMock: HttpTestingController;
  const mockJokeSingle = {
    category: 'Programming',
    type: 'single',
    joke: 'Why do programmers prefer dark mode? Because the light attracts bugs!'
  };
  const mockJokeTwoPart = {
    category: 'Programming',
    type: 'twopart',
    setup: 'Why do Java developers wear glasses?',
    delivery: 'Because they don\'t see sharp.'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JokeApiService]
    });

    service = TestBed.inject(JokeApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should fetch a single joke from the API', () => {
    service.getJoke().subscribe((joke) => {
      expect(joke).toEqual(mockJokeSingle);
    });

    const req = httpMock.expectOne('https://v2.jokeapi.dev/joke/Any');
    expect(req.request.method).toBe('GET');
    req.flush(mockJokeSingle);
  });

  it('should fetch a two-part joke from the API', () => {
    service.getJoke().subscribe((joke) => {
      expect(joke).toEqual(mockJokeTwoPart);
    });

    const req = httpMock.expectOne('https://v2.jokeapi.dev/joke/Any');
    expect(req.request.method).toBe('GET');
    req.flush(mockJokeTwoPart);
  } );

  
});
