import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {

  constructor(private router: Router ) {}
  navigate(){
    this.router.navigate(["/show"])
  }
  ngOnInit() {

  }

}
