import { Component, OnInit, Input } from '@angular/core';
import { GetdataService} from '../../services/getdata.service';//引入服务
import { Router} from '@angular/router';
import { Http,Jsonp}from '@angular/http';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public http:Http,public jsonp:Jsonp) { 

  }

  @Input() list:Array<any>;
  arr=[];
  ngOnInit() {
    this.jsonp.get("http://datainfo.duapp.com/shopdata/getclass.php").subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
}
