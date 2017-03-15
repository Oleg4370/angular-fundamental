import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['power 1','power 2', 'power 3', 'power 4'];
  model = new Hero(18,'Oleh',this.powers[2],'no ego');
  submitted=false;
  onSubmit(){this.submitted = true}
  newHero(){
    this.model = new Hero(19,'','');
  }

  //TODO: remove this line when we'are done
  get diagnostic(){return JSON.stringify(this.model);}
  constructor() { }


}
