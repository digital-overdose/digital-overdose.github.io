import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/copyright`, 'Copyright Policy',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['copyright', 'cc-by-sa']);
  }
}
