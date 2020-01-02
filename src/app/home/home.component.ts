import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x:string ="Random data";
  y:number =1;

  constructor() { }

  ngOnInit() {
  }
  fnclick()
  {
    this.x=this.x+"new";
  }

}
