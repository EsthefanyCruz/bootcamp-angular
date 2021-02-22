import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  title = 'Home';
  titlePhilosophy = 'Philosophy';
  titleWorkManagament ='Work Managament';
  titleTechnologies = 'Technologies';

  constructor() {}
  ngOnInit(): void {}
}
