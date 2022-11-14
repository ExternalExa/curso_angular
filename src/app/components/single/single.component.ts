import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../sevices/heroes.service';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styles: [
  ]
})
export class SingleComponent implements OnInit {

  heroe:any = []  

  constructor(private activated_route:ActivatedRoute,
              private _heroesServices:HeroesService) {
      this.activated_route.params.subscribe( params => {
          this.heroe = this._heroesServices.getHeroeById(params['id']);
      });
   }

  ngOnInit(): void {
  }

}
