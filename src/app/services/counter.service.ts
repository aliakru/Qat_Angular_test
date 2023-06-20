import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CounterService {
  public count = 0;

  getount() {
    return this.count;
  }

  getIncrementedCount() {
    return (this.count += 1);
  }
}
