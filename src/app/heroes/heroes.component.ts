import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from './mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [

  ],
})
export class HeroesComponent {
  heroes = HEROES;
}
