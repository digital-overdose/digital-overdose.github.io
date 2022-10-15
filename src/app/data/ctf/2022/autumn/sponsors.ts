import { Sponsor } from "src/app/interfaces/sponsor";

/** The list of team members. */
export const sponsorsCTFAutumn2022: Sponsor[] = [
  {
    name: 'Offensive Security',
    imageUrl: '/assets/images/ctf/2022/autumn/offsec-logo.svg',
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
  {
    name: 'Cybrancee',
    imageUrl: '/assets/images/ctf/2022/autumn/cybrancee.png',
    links: [
      {
        label: 'Website',
        icon: 'fas fa-globe',
        url: 'https://cybrancee.com/'
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/cybrancee'
      },
    ]
  },
];
