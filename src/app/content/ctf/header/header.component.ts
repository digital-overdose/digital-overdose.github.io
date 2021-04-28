import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctf-header',
  templateUrl: './header.component.html',
  styleUrls: ['../ctf.components.scss']
})
export class HeaderComponent implements OnInit {
  @Input() path: string;

  constructor() { }

  ngOnInit(): void {
  }
}
