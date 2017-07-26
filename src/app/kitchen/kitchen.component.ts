import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  status: String;

  constructor() {
    status = 'kitchen';
  }

  ngOnInit() {
  }

}