import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeApiComponent } from "./joke-api/joke-api.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JokeApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JokeApi';
}
