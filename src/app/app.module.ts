import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
