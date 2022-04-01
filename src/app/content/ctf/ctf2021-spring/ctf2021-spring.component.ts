import { BASE_URL } from '../../../data/url';
import { MetaService } from '../../../services/meta.service';
import { Component, OnInit } from '@angular/core';
import { sponsorsCTFSpring2021 } from 'src/app/data/ctf/2021/spring/sponsors';
import { Mentor } from 'src/app/interfaces/mentor';

@Component({
  selector: 'app-ctf2021spring',
  templateUrl: './ctf2021-spring.component.html',
  styleUrls: ['../ctf.components.scss', '../../../../assets/css/team-card.scss']
})
export class Ctf2021SpringComponent implements OnInit {
  sponsors: Mentor[] = sponsorsCTFSpring2021;

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/ctf/2021/spring`, 'Digital Overdose Conference 2021 CTF',
      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
      ['capture the flag', 'ctf', 'cybersecurity'],
      'Digital Overdose is running virtual Capture the Flag challenges!');
  }

}
