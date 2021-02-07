import { BASE_URL } from './../../data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/team`, 'The Digital Overdose Team!',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['discord', 'community', 'team']);
  }

}
