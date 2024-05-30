import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgFor,
    HeroesComponent,
    RouterModule,
    HeroSearchComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
