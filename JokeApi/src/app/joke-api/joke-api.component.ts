import { Component } from '@angular/core';
import { JokeApiService } from '../joke-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-joke-api',
  standalone: true,
  imports: [],
  templateUrl: './joke-api.component.html',
  styleUrl: './joke-api.component.scss'
})
export class JokeApiComponent {
  joke: string = '';

  constructor(private jokeApiService: JokeApiService) { }

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke(): void {
    this.jokeApiService.getJoke().subscribe(
      data => {
        if (data.type === 'single') {
          this.joke = data.joke;
        } else if (data.type === 'twopart') {
          this.joke = `${data.setup} - ${data.delivery}`;
        }
      },
      error => {
        console.error('Error al obtenir la broma', error);
      }
    );
  }

}
