// tslint:disable:object-literal-key-quotes
import { Mentor } from 'src/app/interfaces/mentor';

/** The list of team members. */
export const sponsors: Mentor[] = [
  {
    name: 'CTGIntelligence',
    imageUrl: '/assets/images/conference/2022/sponsors/ctgintelligence.jpg',
    links: [
      {
        label: 'Website',
        icon: 'fas fa-globe',
        url: 'https://www.ctgintelligence.com/',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/CtgIntelligence'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/company/ctg-intelligence/',
      }
    ]
  },
  {
    name: 'Trans Tech Tent',
    imageUrl: '/assets/images/conference/2022/sponsors/trans-tech-tent.png',
    links: [
      {
        label: 'Website',
        icon: 'fas fa-globe',
        url: 'https://www.transtechtent.com',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/TransTechTent'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/company/trans-tech-tent/',
      },
      {
        label: 'Instagram',
        icon: 'fab fa-fw fa-instagram-square',
        url: 'https://www.instagram.com/TransTechTent/',
      },
    ]
  },
];
