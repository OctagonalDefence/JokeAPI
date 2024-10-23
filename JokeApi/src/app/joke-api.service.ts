import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {

  private apiUrl = 'https://v2.jokeapi.dev/joke/Any';

  constructor(private http: HttpClient) { }

  getJoke(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
 

}
