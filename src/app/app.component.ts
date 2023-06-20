import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { CounterBtn } from './counter-btn/counter-btn.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './sidenav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterBtn,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
