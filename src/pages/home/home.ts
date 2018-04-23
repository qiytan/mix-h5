import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    

  }
  show="information";
  doionrefresh(ionrefresher){
    setTimeout(()=>{
      ionrefresher.complete();
    },500);
  }
  items=[,,,];
  
  doInfinite(infiniteScroll){
    setTimeout(()=>{
    for(let i=0;i<30;i++)
    {
      this.items.push(this.items.length);
    }
    console.log('Async');
    infiniteScroll.complete();
  },500);
}
}
