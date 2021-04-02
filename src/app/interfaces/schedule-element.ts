import { TeamMember } from './team-member';

export interface ScheduleElement {
  /** The year this Post was published on. */
  speakers: TeamMember[];

  start: Date;

  end: Date;

  portion: number;

  startBST: string;

  endBST: string;
}
