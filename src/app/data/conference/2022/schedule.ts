import { ScheduleElement } from 'src/app/interfaces/schedule-element';
import { TeamMember } from 'src/app/interfaces/team-member';
import { speakers } from './speakers';

function _(name: string): TeamMember {
  return speakers.filter(x => x.name === name)[0];
}

export const schedule: ScheduleElement[] = [
];
