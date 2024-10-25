import { Component, OnInit } from '@angular/core';
import { JokeApiService, Joke } from '../joke-api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-joke-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke-api.component.html',
  styleUrl: './joke-api.component.scss'
})
export class JokeApiComponent implements OnInit {

  joke: Joke | null = null;

  constructor(private jokeApiService: JokeApiService) { }

  ngOnInit(): void {
    this.getNewJoke();
  }

  getNewJoke(): void {
    this.jokeApiService.getJoke().subscribe({
      next: (joke) => this.joke = joke,
      error: (error) => console.error('Error al obtener el chiste', error)
    });
  }

}
