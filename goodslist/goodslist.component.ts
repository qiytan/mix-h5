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

  constructor(public getdata:GetdataService,public router:Router,public http:Http,public jsonp:Jsonp) { 

  }
  // @Input() list:Array<any>;
  list=[1,2,3,4,5,6];
  index:number;
  num;
  dataList;
  getIndex(i){
   this.index=i;
  }
  goDetail(idx){
    this.router.navigate(['/gooddetail',idx]);
  }

  ngOnInit() {
    // console.log('hi'+this.router.snapshot.params.goodsId);
    // this.num=this.router.snapshot.params.id;
    this.jsonp.get("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK").subscribe(data=>{
      console.log(data['_body']);
      this.dataList=data['_body'];
    },err=>{
      console.log(err);
    });
    // this.http.get("http://datainfo.duapp.com/shopdata/getclass.php").subscribe(data=>{
    //   console.log(data);
    // },err=>{
    //   console.log(err);
    // });
    this.getdata.addData(200);
    this.getdata.addData(100);
    this.getdata.addData(300);
    console.log(this.getdata.list);
  }
}
