import { Injectable } from '@angular/core';//注入

@Injectable()//一般不要去掉
export class GetdataService {

  constructor() { }
list=[];
// get(url:number){
 
//   return url+100;
// }
addData(num:number){
  this.list.push(num);
}
index:number;
  getIndex(i){
   this.index=i;
   console.log(i);
  }
  setItem(key:string,value){
   localStorage.setItem(key,value);
  }
  getItem(key){
    localStorage.getItem(key);
  }
  deleteItem(key){
    localStorage.removeItem(key);
  }
}


