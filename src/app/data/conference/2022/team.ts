import { TeamMember } from '../../../interfaces/team-member';

/** The list of team members. */
export const organizers: TeamMember[] = [
  {
    name: 'MAYA',
    alias: ['ATOMICMAYA'],
    description: 'Organizer, Host',
    imageUrl: '/assets/images/team/atomicmaya.jpg',
    links: [
      {
        label: 'Blog',
        icon: 'fas fa-fw fa-globe',
        url: 'https://atomicmaya.me',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/AtomicMaya_',
      },/*
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://linkedin.com/in/nicolas-boeckh',
      },*/
      {
        label: 'Keybase',
        icon: 'fas fa-fw fa-key',
        url: 'https://keybase.io/atomicmaya',
      },
      {
        label: 'GitHub',
        icon: 'fab fa-fw fa-github',
        url: 'https://github.com/AtomicMaya',
      },
      {
        label: 'Mastodon',
        icon: 'fab fa-fw fa-mastodon',
        url: 'https://tech.lgbt/@AtomicMaya',
      }
    ]
  },
  {
    name: 'EDEN STROET',
    alias: ['MRS SKELLI'],
    description: 'Organizer, Host',
    imageUrl: '/assets/images/conference/2022/team/mrs-skelli.jpg',
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
];

export const volunteers: TeamMember[] = [
  {
    name: 'GHOST PROTOCOL',
    description: 'Community Volunteer',
    imageUrl: '/assets/images/conference/2022/team/ghostprotocol.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/ghostprot_DO',
      }
    ]
  },
  {
    name: 'ANASTASIIA MYTROFANOVSKA',
    alias: ['STACY'],
    description: 'Community Volunteer',
    imageUrl: '/assets/images/conference/2022/team/anastasiia_m.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/stasya7z',
      }
    ]
  },
  {
    name: 'ABBY SIMMONS',
    alias: ['AGITATO'],
    description: 'Community Manager',
    imageUrl: '/assets/images/conference/2022/team/pandecrew.png',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/met_sec',
      },
    ]
  },
];
