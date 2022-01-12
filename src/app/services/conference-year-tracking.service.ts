import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConferenceYearTrackingService {
  currentYear: number = 2022;
  displayedYear: number = 2022;

  constructor() {
    console.log('Constructor called')
  }

  toggleYear(newYear: number) {
    this.displayedYear = newYear;
  }

  resetYear() {
    this.displayedYear = this.currentYear;
  }

  isCurrentYear(): boolean {
    return this.displayedYear == this.currentYear;
  }

  get year(): number {
    return this.displayedYear;
  }

  get yearList(): number[] {
    return [2021, 2022].filter(x => x != this.currentYear)
  }
}
