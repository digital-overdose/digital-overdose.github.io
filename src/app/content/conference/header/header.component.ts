import { Component, Input } from '@angular/core';
import { YEAR } from 'src/app/data/const';
import { ConferenceYearTrackingService } from 'src/app/services/conference-year-tracking.service';

@Component({
  selector: 'app-conference-header',
  templateUrl: './header.component.html',
  styleUrls: ['../conference.components.scss', './header.component.scss']
})
export class ConferenceNavHeaderComponent  {
  @Input() path: string;
  showArchives: boolean = false;
  year = YEAR;

  constructor(private yearDisplayService: ConferenceYearTrackingService) { }

  yearList = this.yearDisplayService.yearList;

  isCurrentYear(): boolean {
    return this.getYear() === YEAR;
  }

  setYear(year: number): void {
    this.year = year;
  }

  getYear(): number {
    return parseInt(this.path.substring(12, 16), 10);
  }

  toggleArchive() {
    this.showArchives = !this.showArchives;
  }
}
