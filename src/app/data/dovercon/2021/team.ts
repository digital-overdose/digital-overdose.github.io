// tslint:disable:object-literal-key-quotes
import { TeamMember } from '../../../interfaces/team-member';

/** The list of team members. */
export const organizers: TeamMember[] = [
  {
    name: 'EDEN STROET',
    alias: ['MRS SKELLI'],
    description: 'Conference Co-Organizer, Conference Co-Host',
    imageUrl: '/assets/images/dovercon/2021/team/mrs-skelli.jpg',
    links: [
      {
        label: 'Blog',
        icon: 'fas fa-fw fa-globe',
        url: 'https://skelli.win',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/Mrs_Skelli',
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/eden-stroet-b9b3b2201/',
      },
      {
        label: 'GitHub',
        icon: 'fab fa-fw fa-github',
        url: 'https://github.com/mrs-skelli',
      }
    ]
  },
  {
    name: 'NICOLAS BOECKH',
    alias: ['ATOMICNICOS'],
    description: 'Conference Co-Organizer, Conference Co-Host',
    imageUrl: '/assets/images/dovercon/2021/team/atomicnicos.jpg',
    links: [
      {
        label: 'Blog',
        icon: 'fas fa-fw fa-globe',
        url: 'https://atomicnicos.me',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/AtomicNicos',
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://linkedin.com/in/nicolas-boeckh',
      },
      {
        label: 'Keybase',
        icon: 'fas fa-fw fa-key',
        url: 'https://keybase.io/atomicnicos',
      },
      {
        label: 'GitHub',
        icon: 'fab fa-fw fa-github',
        url: 'https://github.com/AtomicNicos',
      }
    ]
  },
]

export const helpers: TeamMember[] = [
  {
    name: 'S4T4N',
    description: 'Conference Helper, External Relations Agent',
    imageUrl: '/assets/images/dovercon/2021/team/s4t4n.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/s4t4n1212',
      },
    ]
  },
  {
    name: 'CyberVega',
    description: 'Conference Media Designer',
    imageUrl: '/assets/images/dovercon/2021/team/cybervega.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/TheCyberVega',
      },
    ]
  }
];
