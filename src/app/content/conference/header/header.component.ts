import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conference-header',
  templateUrl: './header.component.html',
  styleUrls: ['../conference.components.scss']
})
export class ConferenceNavHeaderComponent implements OnInit {
  @Input() path: string;

  constructor() { }

  ngOnInit(): void {
  }

}
