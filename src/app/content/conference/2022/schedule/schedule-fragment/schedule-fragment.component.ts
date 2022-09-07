import { Component, Input, OnInit } from '@angular/core';
import { ScheduleElement } from 'src/app/interfaces/schedule-element';

@Component({
  selector: 'app-schedule-con2022-fragment',
  templateUrl: './schedule-fragment.component.html',
  styleUrls: ['./schedule-fragment.component.scss']
})
export class ScheduleFragmentComponent implements OnInit {

  @Input('scheduleFragment') scheduleFragment: ScheduleElement[];

  constructor() { }

  ngOnInit(): void {
  }
}
