import { Component } from '@angular/core';
import { CounterBtn } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CounterBtn],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
