import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/community`, 'Community',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['discord', 'community']);
  }

}
