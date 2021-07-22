import { Component, Input, OnInit } from '@angular/core';
import { DoverconYearTrackingService } from 'src/app/services/dovercon-year-tracking.service';

@Component({
  selector: 'app-conference-header',
  templateUrl: './header.component.html',
  styleUrls: ['../conference.components.scss', './header.component.scss']
})
export class ConferenceNavHeaderComponent  {
  @Input() path: string;
  showArchives: boolean = false;

  constructor(private yearDisplayService: DoverconYearTrackingService) { }

  year = this.yearDisplayService.year;
  yearList = this.yearDisplayService.yearList;
  resetYear = this.yearDisplayService.resetYear;
  toggleYear = this.yearDisplayService.toggleYear;

  toggleArchive() {
    this.showArchives = !this.showArchives;
  }
}
