import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-tabs',
  templateUrl: './open-tabs.component.html',
  styleUrls: ['./open-tabs.component.css']
})
export class OpenTabsComponent implements OnInit {

  tabsPositions = [1,3,5,7,2,4,6,8,1,3,5,7,2,4,6,8];
  currentTab = -1;
  selctedTab = 0;
  showTwo = [];

  checkCurrent(index){
    this.currentTab = (this.currentTab == index) ? -1 : index;
    let currentValue =  this.tabsPositions[index];
    if(this.selctedTab == currentValue){
      this.showTwo.push(currentValue);
    }else{
      this.selctedTab = currentValue;
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
