import { BASE_URL } from './../../data/url';
import { MetaService } from './../../services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.scss']
})
export class NotFound404Component implements OnInit {
  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.setTags(`${BASE_URL}/404-not-found`, 'The error page',
                      `${BASE_URL}/assets/images/404_image.jfif`, 460, 403,
                      ['community', 'discord', 'error', '404'],
                      'Waffles. Correct Horse Battery Staple. DEBUG. g̵̺̙͍̼͓͈̤̋͒ļ̶̛̖̖̭͎̪͍͉̎͋̿̑́͋̈́̀̈́͊͠ì̴̛͈͇͓̯̤̻͈̯͂̈͂́̊̑͛̈́̏̚ṯ̵͎̝̘̱̜̋̂̓͊̌́̄̽̄̎̃̽̕͝c̵̣̪͍͎̹̪̎̓̓̓͊̽͠ͅh̵̢̡̡̛̭̯̠̥̳̗̘̽͑́̑͑͘e̴̢̡̝̹̼̱͙͚̿͂̍̎́̀̊̄͠ͅs̷̠̣͙̓̈̉̂̉̃́̍̃̉͠͝͝. "><script>console.log(\'test\');</script>');
  }
}
