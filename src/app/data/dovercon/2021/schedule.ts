import { ScheduleElement } from 'src/app/interfaces/schedule-element';
import { TeamMember } from 'src/app/interfaces/team-member';
import { speakers } from './speakers';

function _(name: string): TeamMember {
  return speakers.filter(x => x.name === name)[0];
}

export const schedule: ScheduleElement[] = [
  {
    speakers: [
      _('Juan Giarrizzo')
    ],
    portion: 1,
    start: new Date(1618647900000),
    end: new Date(1618649700000),
    startCEST: '10:25',
    endCEST: '10:55'
  },
  {
    speakers: [
      _('Abigail Simmons')
    ],
    portion: 1,
    start: new Date(1618650000000),
    end: new Date(1618651800000),
    startCEST: '11:00',
    endCEST: '11:30'
  },
  {
    speakers: [
      _('3t3rn4l P4r4d0x')
    ],
    portion: 1,
    start: new Date(1618652100000),
    end: new Date(1618653900000),
    startCEST: '11:35',
    endCEST: '12:05'
  },
  {
    speakers: [
      _('REALM')
    ],
    portion: 1,
    start: new Date(1618654200000),
    end: new Date(1618656000000),
    startCEST: '12:10',
    endCEST: '12:40'
  },
  {
    speakers: [
      _('Patrick Rus')
    ],
    portion: 1,
    start: new Date(1618656300000),
    end: new Date(1618658100000),
    startCEST: '12:45',
    endCEST: '13:15'
  },
  {
    speakers: [
      _('Chloe Seaton')
    ],
    portion: 2,
    start: new Date(1618660800000),
    end: new Date(1618662600000),
    startCEST: '14:00',
    endCEST: '14:30'
  },
  {
    speakers: [
      _('Nasreddine Bencherchali')
    ],
    portion: 2,
    start: new Date(1618662900000),
    end: new Date(1618664700000),
    startCEST: '14:35',
    endCEST: '15:05'
  },
  {
    speakers: [
      _('Luna Belfort'),
      _('Alvaro Leno')
    ],
    portion: 2,
    start: new Date(1618665000000),
    end: new Date(1618666800000),
    startCEST: '15:10',
    endCEST: '15:40'
  },
  {
    speakers: [
      _('Deeksha Shekar')
    ],
    portion: 2,
    start: new Date(1618667100000),
    end: new Date(1618668900000),
    startCEST: '15:45',
    endCEST: '16:15'
  },
  {
    speakers: [
      _('BosintBlanc')
    ],
    portion: 2,
    start: new Date(1618669200000),
    end: new Date(1618671000000),
    startCEST: '16:20',
    endCEST: '16:50'
  },
  {
    speakers: [
      _('Sam Ferguson')
    ],
    portion: 2,
    start: new Date(1618671300000),
    end: new Date(1618673100000),
    startCEST: '16:55',
    endCEST: '17:25'
  },
  {
    speakers: [
      _('Drew Jones')
    ],
    portion: 2,
    start: new Date(1618673400000),
    end: new Date(1618675500000),
    startCEST: '17:30',
    endCEST: '18:05'
  },
  {
    speakers: [
      _('Suryansh M.')
    ],
    portion: 2,
    start: new Date(1618675800000),
    end: new Date(1618677600000),
    startCEST: '18:10',
    endCEST: '18:40'
  },
  {
    speakers: [
      _('Heather Lane')
    ],
    portion: 2,
    start: new Date(1618677900000),
    end: new Date(1618679700000),
    startCEST: '18:45',
    endCEST: '19:15'
  },
  {
    speakers: [
      _('Becca I.')
    ],
    portion: 3,
    start: new Date(1618734000000),
    end: new Date(1618735800000),
    startCEST: '10:20',
    endCEST: '10:50'
  },
  {
    speakers: [
      _('Michael McGinley')
    ],
    portion: 3,
    start: new Date(1618736100000),
    end: new Date(1618737900000),
    startCEST: '10:55',
    endCEST: '11:25'
  },
  {
    speakers: [
      _('Josephine Windsor-Lewis')
    ],
    portion: 3,
    start: new Date(1618738200000),
    end: new Date(1618740000000),
    startCEST: '11:30',
    endCEST: '12:00'
  },
  {
    speakers: [
      _('White Hat Inspector')
    ],
    portion: 3,
    start: new Date(1618740300000),
    end: new Date(1618742100000),
    startCEST: '12:05',
    endCEST: '12:35'
  },
  {
    speakers: [
      _('Anastasiia Mytrofanovska')
    ],
    portion: 3,
    start: new Date(1618742400000),
    end: new Date(1618744200000),
    startCEST: '12:40',
    endCEST: '13:10'
  },
  {
    speakers: [
      _('Tehreem Fahim')
    ],
    portion: 4,
    start: new Date(1618747200000),
    end: new Date(1618749000000),
    startCEST: '14:00',
    endCEST: '14:30'
  },
  {
    speakers: [
      _('Rahul')
    ],
    portion: 4,
    start: new Date(1618749300000),
    end: new Date(1618751100000),
    startCEST: '14:35',
    endCEST: '15:05'
  },
  {
    speakers: [
      _('Alex Hoffman')
    ],
    portion: 4,
    start: new Date(1618751400000),
    end: new Date(1618753200000),
    startCEST: '15:10',
    endCEST: '15:40'
  },
  {
    speakers: [
      _('Mariah Rucker')
    ],
    portion: 4,
    start: new Date(1618753500000),
    end: new Date(1618755300000),
    startCEST: '15:45',
    endCEST: '16:15'
  },
  {
    speakers: [
      _('Luke Pajor')
    ],
    portion: 4,
    start: new Date(1618755600000),
    end: new Date(1618757400000),
    startCEST: '16:20',
    endCEST: '16:50'
  },
  {
    speakers: [
      _('Sarthak Taneja')
    ],
    portion: 4,
    start: new Date(1618757700000),
    end: new Date(1618759500000),
    startCEST: '16:55',
    endCEST: '17:25'
  },
  {
    speakers: [
      _('Argandov')
    ],
    portion: 4,
    start: new Date(1618759800000),
    end: new Date(1618761600000),
    startCEST: '17:30',
    endCEST: '18:00'
  },
  {
    speakers: [
      _('Thomas Chen')
    ],
    portion: 4,
    start: new Date(1618761900000),
    end: new Date(1618763700000),
    startCEST: '18:05',
    endCEST: '18:35'
  },
];
