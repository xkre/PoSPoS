import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  status: String;

  constructor() { 
    status = 'counter';
  }

  ngOnInit() {
  }

}