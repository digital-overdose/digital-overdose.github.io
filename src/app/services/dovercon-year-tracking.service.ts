import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoverconYearTrackingService {
  currentYear: number = 2021;
  displayedYear: number = 2021;

  constructor() { }

  toggleYear(newYear: number) {
    this.displayedYear = newYear;
  }

  resetYear() {
    this.displayedYear = this.currentYear;
  }

  get year(): number {
    return this.displayedYear;
  }

  get yearList(): number[] {
    return [2021].filter(x => x != this.currentYear)
  }
}
