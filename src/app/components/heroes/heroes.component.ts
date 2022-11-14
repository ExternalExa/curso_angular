import { Component, OnInit } from '@angular/core';
import { HeroesService, Hereo } from 'src/app/sevices/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Hereo[] = [];

  constructor(private _heroesServices:HeroesService,
              private _router:Router) { }


  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroe(id_heroe:number){
    this._router.navigate(['/heroe', id_heroe]);
  }

}


