import { Component,ViewChild,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { Http,Jsonp, Headers} from '@angular/http';  
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public http:Http ,public jsonp:Jsonp,public navCtrl: NavController,public alertCtrl: AlertController){  }

  login(){
    this.http.get('http://datainfo.duapp.com/shopdata/userinfo/php').subscribe(
      data=>{
        this.navCtrl.push(HomePage);
      },
      err=>{
        let alert = this.alertCtrl.create({
          title:'登陆失败！',
          subTitle:'请检查用户名密码',
          buttons:['OK']
        });
        alert.present();
      })
  }
}
