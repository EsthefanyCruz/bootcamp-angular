import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['../styles/variables.component.css']
})
export class PhilosophyComponent implements OnInit {
  title = 'Philosophy';
  titleMission = 'Mission';
  titleObjective = 'Objective';
  titlePlan = 'Plan';
  constructor() { }

  ngOnInit(): void {
  }

}
