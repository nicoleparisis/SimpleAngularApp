import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {

  greeting = "Angular is awesome";
  delimiter = "_";

  constructor() { }

  ngOnInit() {
  }

}
