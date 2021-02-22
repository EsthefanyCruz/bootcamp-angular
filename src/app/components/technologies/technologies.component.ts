import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['../styles/variables.component.css', 'technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
title = 'Technologies';
titleReactNative = 'React Native';
titleJPA = 'JPA';
titleSpringBoot = 'Spring Boot';
titleJavaScript = 'JavaScript';
titleTypeScript = 'TypeScript';


  constructor() { }

  ngOnInit(): void {
  }

}
