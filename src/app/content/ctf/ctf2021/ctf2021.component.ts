import { Component, OnInit } from '@angular/core';
import { sponsors } from 'src/app/data/ctf/2021-01/sponsors';
import { Mentor } from 'src/app/interfaces/mentor';

@Component({
  selector: 'app-ctf2021',
  templateUrl: './ctf2021.component.html',
  styleUrls: ['../ctf.components.scss', '../../../../assets/css/team-card.scss']
})
export class Ctf2021Component implements OnInit {
  sponsors: Mentor[] = sponsors;

  constructor() { }

  ngOnInit(): void {
  }

}
