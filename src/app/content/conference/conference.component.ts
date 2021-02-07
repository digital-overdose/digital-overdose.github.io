import { BASE_URL } from './../../data/url';
import { MetaService } from './../../services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/conference`, 'Digital Overdose Con: For Rookies',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies']);
  }
}
