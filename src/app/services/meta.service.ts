import { TitleService } from './title.service';
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private meta: Meta, private title: TitleService) { }

  setTags(url: string, title: string, imgUrl: string, imgWidth: number, imgHeight: number, keywords: string[], description?: string, authorName?: string, authorSocial?: string) {
    this.title.setTitle(title);

    this.meta.addTags([
      { name: 'og:url', content: url },
      { name: 'og:locale', content: 'en_us' },
      // TODO Change
      { name: 'og:site_name', content: '' },
      { name: 'og:title', content: `${title} @ Digital Overdose` },
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
