// tslint:disable: quotemark
import { BASE_URL } from 'src/app/data/url';
import { TitleService } from 'src/app/services/title.service';
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

/**
 * Class that handles the dynamic injection of website metadata tags.
 *
 * @export
 */
@Injectable({
  providedIn: 'root'
})
export class MetaService {
  /**
   * Creates an instance of MetaService.
   *
   * @param meta The service that can inject meta data into the HTML page header.
   * @param title A service that sets the webpage's title.
   */
  constructor(private meta: Meta, private title: TitleService) { }

  /**
   * Injects the metadata tags into the HTML page. Used for SSR and SEO.
   *
   * @param url The URL of this resource.
   * @param title The title of the page.
   * @param imgUrl The URL of the meta image.
   * @param imgWidth The width of the meta image.
   * @param imgHeight The height of the meta image.
   * @param keywords An assortment of keywords for SEO.
   * @param [description] A description of the content of the page.
   * @param [authorName] The name of the person that wrote the content in the page.
   * @param [authorSocial] The author's social media links.
   */
  setTags(url: string,
          title: string,
          imgUrl: string,
          imgWidth: number, imgHeight: number,
          keywords: string[], description?: string,
          authorName?: string, authorSocial?: string) {
    this.title.setTitle(title);

    this.meta.addTags([
      { name: 'og:url', content: url },
      { name: 'og:locale', content: 'en_us' },
      { name: 'og:site_name', content: `${BASE_URL}` },
      { name: 'og:title', content: `${title} @Digital Overdose` },
      { name: 'og:description', content: `${description ?? 'Welcome to Digital Overdose! We\'re an ethical hacking community dedicated to providing help and resources for members and guests. We aim to create a large community that people can enjoy and find support or friends in.'}` },
      { name: 'og:image', content: imgUrl },
      { name: 'description', content: `${description ?? 'Welcome to Digital Overdose! We\'re an ethical hacking community dedicated to providing help and resources for members and guests. We aim to create a large community that people can enjoy and find support or friends in.'}` },
      { name: 'keywords', content: ['digital', 'overdose', 'infosec', 'security', 'cybersec', 'cybersecurity', ...keywords].join(', ') },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:image', content: imgUrl },
      { name: 'twitter:label1', content: 'Written By' },
      { name: 'twitter:data1', content: `${authorName ?? 'Digital Overdose'}` },
      { name: 'twitter:site', content: '@d_overcon' },
      { name: 'twitter:creator', content: `${authorSocial ?? '@d_overcon' }` },
      { name: 'twitter:image:width', content: `${imgWidth}` },
      { name: 'twitter:image:height', content: `${imgHeight}` },
    ]);
  }
}
