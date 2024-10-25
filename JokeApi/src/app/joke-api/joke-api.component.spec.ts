import { TestBed, ComponentFixture } from '@angular/core/testing';
import { JokeApiComponent } from './joke-api.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { JokeApiService } from '../joke-api.service';

describe('JokeApiComponent', () => {
  let component: JokeApiComponent;
  let fixture: ComponentFixture<JokeApiComponent>;
  let mockJokeService: any;
  let mockSingleJoke = { joke: 'Why did the chicken cross the road? To get to the other side!' };
  let mockTwoPartJoke = { setup: 'Why did the chicken cross the road?', punchline: 'To get to the other side!' };

  beforeEach(async () => {
    mockJokeService = jasmine.createSpyObj(['getJoke']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, JokeApiComponent],
      providers: [{ provide: JokeApiService, useValue: mockJokeService }]
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
    expect(compiled.querySelector('p')?.textContent).toContain(mockTwoPartJoke.punchline);
  });
});