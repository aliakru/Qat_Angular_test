import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'counter-btn',
  standalone: true,
  imports: [CommonModule],
  providers: [CounterService],
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css'],
})
export class CounterBtn {
  constructor(private counterService: CounterService) {}

  public counter: Number = 0;

  incCount() {
    this.counter = this.counterService.getIncrementedCount();
  }
}
