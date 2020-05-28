import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

first='';
last='';
mobile='';
address='';
  fname='';
  lname='';
  mno='';
  add='';
  d:boolean=false;
  @Input() pattern: string | RegExp

  constructor() { }

  ngOnInit() {
  }
update(obj1,obj2,obj3,obj4)
{
  this.fname= obj1;
  this.lname=obj2;
  this.mno=obj3;
  this.add=obj4;
  this.d=!this.d;
}

}