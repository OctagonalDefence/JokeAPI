import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of, throwError } from 'rxjs';
import { JokeApiComponent } from './joke-api.component';
import { JokeApiService } from '../joke-api.service';

describe('JokeComponent', () => {
  let component: JokeApiComponent;
  let fixture: ComponentFixture<JokeApiComponent>;
  let mockJokeService: jasmine.SpyObj<JokeApiService>;

  const mockSingleJoke = { type: 'single', joke: 'Why do programmers prefer dark mode? Because the light attracts bugs!' };
  const mockTwoPartJoke = { type: 'twopart', setup: 'Why do Java developers wear glasses?', delivery: 'Because they don\'t see sharp.' };

  beforeEach(async () => {
    mockJokeService = jasmine.createSpyObj('JokeService', ['getJoke']);

    await TestBed.configureTestingModule({
      declarations: [JokeApiComponent],
      providers: [
        { provide: JokeApiService, useValue: mockJokeService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeApiComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a single joke', () => {
    mockJokeService.getJoke.and.returnValue(of(mockSingleJoke));

    fixture.detectChanges();  

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(mockSingleJoke.joke);
  });

  it('should display a two-part joke', () => {
    mockJokeService.getJoke.and.returnValue(of(mockTwoPartJoke));

    fixture.detectChanges();  

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(mockTwoPartJoke.setup);
    expect(compiled.querySelector('p')?.textContent).toContain(mockTwoPartJoke.delivery);
  });

});

