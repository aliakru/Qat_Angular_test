import { Component } from '@angular/core';
import { CounterBtn } from '../counter-btn/counter-btn.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CounterBtn],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
