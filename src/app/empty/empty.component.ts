import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  constructor() {
    console.log("EmptyComponent1!"); }

  ngOnInit() {
    console.log("EmptyComponent2!");
  }

}
