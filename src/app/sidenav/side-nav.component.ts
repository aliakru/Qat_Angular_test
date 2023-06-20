import { Component } from '@angular/core';
import { CounterBtn } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CounterBtn],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  title = 'default';
}
