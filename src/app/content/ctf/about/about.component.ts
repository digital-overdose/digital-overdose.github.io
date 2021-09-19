import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-ctf-about',
  templateUrl: './about.component.html',
  styleUrls: ['../ctf.components.scss']
})
export class AboutCTFComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/ctf`, 'Digital Overdose CTFs',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['capture the flag', 'ctf', 'cybersecurity'],
                      'Digital Overdose is running virtual Capture the Flag challenges!');
  }

}
