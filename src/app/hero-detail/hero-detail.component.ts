import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe, Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    UpperCasePipe
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  hero?: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
