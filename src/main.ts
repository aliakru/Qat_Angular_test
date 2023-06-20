import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CounterService } from './app/services/counter.service';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), CounterService],
}).catch((err) => console.error(err));
