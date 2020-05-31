import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  form = {
    name: '',
    lastName: '',
    contactNumber: '',
    address: '',
    tableIterator: ''
  };
  display: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  SaveForm(){
    console.log(this.form);
    this.display = true;
  }

  refreshPage(){
    window.location.reload();
  }

}