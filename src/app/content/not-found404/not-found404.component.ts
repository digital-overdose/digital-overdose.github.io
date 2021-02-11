import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';

/**
 * Displays the 404 page.
 *
 * @export
 */
@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.scss']
})
export class NotFound404Component implements OnInit {
  /**
   * Creates an instance of NotFound404Component.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) {
    this.meta.setTags(`${BASE_URL}/404-not-found`, 'The error page',
                      `${BASE_URL}/assets/images/404_image.jfif`, 460, 403,
                      ['community', 'discord', 'error', '404'],
                      'Waffles. Correct Horse Battery Staple. DEBUG. g̵̺̙͍̼͓͈̤̋͒ļ̶̛̖̖̭͎̪͍͉̎͋̿̑́͋̈́̀̈́͊͠ì̴̛͈͇͓̯̤̻͈̯͂̈͂́̊̑͛̈́̏̚ṯ̵͎̝̘̱̜̋̂̓͊̌́̄̽̄̎̃̽̕͝c̵̣̪͍͎̹̪̎̓̓̓͊̽͠ͅh̵̢̡̡̛̭̯̠̥̳̗̘̽͑́̑͑͘e̴̢̡̝̹̼̱͙͚̿͂̍̎́̀̊̄͠ͅs̷̠̣͙̓̈̉̂̉̃́̍̃̉͠͝͝. "><script>console.log(\'test\');</script>');
  }

  /** Set the page metadata information. */
  ngOnInit() { }
}
