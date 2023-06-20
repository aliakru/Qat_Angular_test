import { Component } from '@angular/core';
import { CounterBtn } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CounterBtn],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  title = 'default';
}
