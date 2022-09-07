// tslint:disable:object-literal-key-quotes
import { Sponsor } from 'src/app/interfaces/sponsor';

/** The list of team members. */
export const sponsorsCTFSpring2021: Sponsor[] = [
  {
    name: 'PentesterLab',
    imageUrl: '/assets/images/ctf/2021-01/pentesterlab.png',
    links: [
      {
        label: 'Website',
        icon: 'fas fa-globe',
        url: 'https://pentesterlab.com/'
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/pentesterlab'
      },
      {
        label: 'Facebook',
        icon: 'fab fa-fw fa-facebook-square',
        url: 'https://www.facebook.com/pentesterlab',
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://linkedin.com/company/pentesterlab',
      },
    ]
  },
  {
    name: 'Offensive Security',
    imageUrl: '/assets/images/ctf/2021-01/offsec-logo.svg',
    links: [
      {
        label: 'Website',
        icon: 'fas fa-globe',
        url: 'https://www.offensive-security.com/'
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/offsectraining'
      },
      {
        label: 'Facebook',
        icon: 'fab fa-fw fa-facebook-square',
        url: 'https://www.facebook.com/offsec/',
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/company/offensive-security/',
      },
    ]
  },
];
