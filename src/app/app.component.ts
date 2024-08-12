import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrisisListComponent,HeroesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-router-sample';
}

