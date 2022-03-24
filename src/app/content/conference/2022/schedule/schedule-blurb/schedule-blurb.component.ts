import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-con2022-blurb',
  templateUrl: './schedule-blurb.component.html',
  styleUrls: ['./schedule-blurb.component.scss']
})
export class ScheduleBlurbComponent implements OnInit {
  @Input('title') title: string;
  @Input('description') description?: string;
  @Input('startTimeCEST') start: string;
  @Input('endTimeCEST') end: string;

  constructor() { }

  ngOnInit(): void {
  }

}
