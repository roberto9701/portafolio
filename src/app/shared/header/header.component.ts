import { Component, OnInit } from '@angular/core';

@Component({
  // el selecctor permite usar el componente como una etiqueta normal 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
