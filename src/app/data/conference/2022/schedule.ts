import { ScheduleElement } from 'src/app/interfaces/schedule-element';
import { TeamMember } from 'src/app/interfaces/team-member';
import { speakers } from './speakers';

function _(name: string): TeamMember {
  return speakers.filter(x => x.name === name)[0];
}

export const schedule: ScheduleElement[] = [
  // DAY 1 - MORNING
  {
    speakers: [
      _('Tom Quinn')
    ],
    portion: 1,
    start: new Date(1650699600000),
    end: new Date(1650701400000),
    startCEST: '09:40',
    endCEST: '10:10'
  },
  {
    speakers: [
      _('Danielle Arcon')
    ],
    portion: 1,
    start: new Date(1650701700000),
    end: new Date(1650703500000),
    startCEST: '10:15',
    endCEST: '10:45'
  },
  {
    speakers: [
      _('Mark Giles')
    ],
    portion: 1,
    start: new Date(1650703800000),
    end: new Date(1650705600000),
    startCEST: '10:50',
    endCEST: '11:20'
  },
  {
    speakers: [
      _('Simon Gurney')
    ],
    portion: 1,
    start: new Date(1650705900000),
    end: new Date(1650707700000),
    startCEST: '11:25',
    endCEST: '11:55'
  },
  {
    speakers: [
      _('Ahmed Rashwan')
    ],
    portion: 1,
    start: new Date(1650708000000),
    end: new Date(1650709800000),
    startCEST: '12:00',
    endCEST: '12:30'
  },
  // DAY 1 - AFTERNOON 1
  {
    speakers: [
      _('Peter')
    ],
    portion: 2,
    start: new Date(1650715200000),
    end: new Date(1650717000000),
    startCEST: '14:00',
    endCEST: '14:30'
  },
  {
    speakers: [
      _('Elliot Ownbey')
    ],
    portion: 2,
    start: new Date(1650717300000),
    end: new Date(1650719100000),
    startCEST: '14:35',
    endCEST: '15:05'
  },
  {
    speakers: [
      _('Alexandru Lazar')
    ],
    portion: 2,
    start: new Date(1650719400000),
    end: new Date(1650721200000),
    startCEST: '15:10',
    endCEST: '15:40'
  },
  {
    speakers: [
      _('Aditya Narayan Sinha')
    ],
    portion: 2,
    start: new Date(1650721500000),
    end: new Date(1650723300000),
    startCEST: '15:45',
    endCEST: '16:15'
  },
  {
    speakers: [
      _('Jennifer Gomez')
    ],
    portion: 2,
    start: new Date(1650723600000),
    end: new Date(1650725400000),
    startCEST: '16:20',
    endCEST: '16:50'
  },
  // DAY 1 - AFTERNOON 2
  {
    speakers: [
      _('Greg Burkland')
    ],
    portion: 3,
    start: new Date(1650725700000),
    end: new Date(1650727500000),
    startCEST: '16:55',
    endCEST: '17:25'
  },
  {
    speakers: [
      _('AlienX')
    ],
    portion: 3,
    start: new Date(1650727800000),
    end: new Date(1650729600000),
    startCEST: '17:30',
    endCEST: '18:00'
  },
  {
    speakers: [
      _('Doug Kras')
    ],
    portion: 3,
    start: new Date(1650729900000),
    end: new Date(1650731700000),
    startCEST: '18:05',
    endCEST: '18:35'
  },
  /*
  {
    speakers: [
      _('Glen')
    ],
    portion: 3,
    start: new Date(1650729900000),
    end: new Date(1650731700000),
    startCEST: '18:05',
    endCEST: '18:35'
  },*/
  // DAY 2 - MORNING
  /*

  {
    speakers: [
      _('Sable')
    ],
    portion: 4,
    start: new Date(1650786000000),
    end: new Date(1650787800000),
    startCEST: '09:40',
    endCEST: '10:10'
  },*/
  {
    speakers: [
      _('Michael Hopewell')
    ],
    portion: 4,
    start: new Date(1650788100000),
    end: new Date(1650789900000),
    startCEST: '10:15',
    endCEST: '10:45'
  },
  {
    speakers: [
      _('Abhinav Khanna')
    ],
    portion: 4,
    start: new Date(1650790200000),
    end: new Date(1650792000000),
    startCEST: '10:50',
    endCEST: '11:20'
  },
  {
    speakers: [
      _('Apurv')
    ],
    portion: 4,
    start: new Date(1650792300000),
    end: new Date(1650794100000),
    startCEST: '11:25',
    endCEST: '11:55'
  },
  {
    speakers: [
      {
        name: 'Abigail Simmons, Chloe',
        description: 'A panel hosted by James Bore',
        imageUrl: '/assets/images/conference/2022/speakers/placeholder.jfif',
        links: [
          {
            label: 'James Bore (Twitter)',
            icon: 'fab fa-fw fa-twitter-square',
            url: 'https://twitter.com/coffee_fueled'
          },
        ]
      }
    ],
    portion: 4,
    start: new Date(1650794400000),
    end: new Date(1650796800000),
    startCEST: '12:00',
    endCEST: '12:40'
  },
  /*
  {
    speakers: [
      {
        name: 'TBD',
        description: 'A panel with Abigail and Chloe, hosted by James Bore.',
        imageUrl: '/assets/images/conference/2022/speakers/placeholder.jfif',
        links: [
          {
            label: 'James Bore (Twitter)',
            icon: 'fab fa-fw fa-twitter-square',
            url: 'https://twitter.com/coffee_fueled'
          },
        ]
      }
    ],
    portion: 4,
    start: new Date(1650796500000),
    end: new Date(1650798300000),
    startCEST: '12:35',
    endCEST: '13:05'
  },*/
  {
    speakers: [
      _('Sable')
    ],
    portion: 5,
    start: new Date(1650801600000),
    end: new Date(1650803400000),
    startCEST: '14:00',
    endCEST: '14:30'
  },
  {
    speakers: [
      _('Patrick Rus')
    ],
    portion: 5,
    start: new Date(1650803700000),
    end: new Date(1650805500000),
    startCEST: '14:35',
    endCEST: '15:05'
  },
  {
    speakers: [
      _('Denice')
    ],
    portion: 5,
    start: new Date(1650805800000),
    end: new Date(1650807600000),
    startCEST: '15:10',
    endCEST: '15:40'
  },
  {
    speakers: [
      _('The Crabby Hacker')
      //_('Tony Haresign')
    ],
    portion: 5,
    start: new Date(1650807900000),
    end: new Date(1650809700000),
    startCEST: '15:45',
    endCEST: '16:15'
  },
  {
    speakers: [
      _('Squiblydoo')
    ],
    portion: 5,
    start: new Date(1650810000000),
    end: new Date(1650811800000),
    startCEST: '16:20',
    endCEST: '16:50'
  },
  {
    speakers: [
      _('Tori Outlaw')
    ],
    portion: 6,
    start: new Date(1650812100000),
    end: new Date(1650813900000),
    startCEST: '16:55',
    endCEST: '17:25'
  },
  {
    speakers: [
      _('Chris Meistre')
    ],
    portion: 6,
    start: new Date(1650814200000),
    end: new Date(1650816000000),
    startCEST: '17:30',
    endCEST: '18:00'
  },
  {
    speakers: [
      _('Yui')
    ],
    portion: 6,
    start: new Date(1650816300000),
    end: new Date(1650818100000),
    startCEST: '18:05',
    endCEST: '18:35'
  },
];
