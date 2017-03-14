import { Component } from '@angular/core';

import {Hero} from './app.test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myHero = 'Iron Man';
  heroList = ['BatMan','SuperMan','Hulk'];
  newHeroList = [];

  heroCounter = 0;

  valueFromInput = "You don't add any new Hero :(";
  addNewHero(newValue: string){
    if(newValue){
      this.newHeroList.push(new Hero(this.newHeroList.length,newValue));
      this.heroCounter++;
      this.valueFromInput = "You added new Hero";
    }
  }


  constructor(){
    this.heroList.unshift(this.myHero);
    this.heroList.forEach((item,i)=>{this.newHeroList.push(new Hero(i,item));});
  }
}
