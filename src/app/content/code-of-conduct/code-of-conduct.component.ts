import { MetaService } from './../../services/meta.service';
import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';

@Component({
  selector: 'app-code-of-conduct',
  templateUrl: './code-of-conduct.component.html',
  styleUrls: ['./code-of-conduct.component.scss']
})
export class CodeOfConductComponent implements OnInit {

  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
   constructor(private meta: MetaService) { }

   /** Set the page metadata information. */
   ngOnInit(): void {
     this.meta.setTags(`${BASE_URL}/code-of-conduct`, 'Digital Overdose: General Code of conduct',
                       `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                       ['code', 'of', 'conduct'],
                       'Digital Overdose! Making sure everyone has a good time.');
   }
}
