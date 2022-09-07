import { TeamMember } from './team-member';

export interface Speaker extends TeamMember {
  talkURL?: string;
}
