import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/interfaces/speaker';

@Component({
  selector: 'app-schedule-con2022-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class Conference2022ScheduleCardComponent implements OnInit {
  @Input('speakers') speakers: Speaker[];
  @Input('startTimeCEST') start: String;
  @Input('endTimeCEST') end: String;
  @Input('startTimestamp') startTs: number;
  @Input('endTimestamp') endTs: number;
  @Input('link') link?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
