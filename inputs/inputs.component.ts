import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Input() dataArr:Array<any>;
  @Output() dete=new EventEmitter();
  dataA=[];
  constructor() { }
  data:string;
  add(){
    this.dataArr.push(this.data);
    this.data="";
  }
  changeData(i){
  this.dataA.push(this.dataArr[i]);
  this.dataArr.splice(i,1);
}
  delete(i){
  this.dataArr.splice(i,1);
}    
  deleteA(i){
  this.dataA.splice(i,1);
}
  ngOnInit() {
  }

}
