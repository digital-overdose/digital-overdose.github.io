import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  container: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof RouterEvent) {
          this.container = !['/home'].includes(event.url)
        }
      }
    );
  }
}
