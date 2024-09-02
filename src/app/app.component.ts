import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'cm-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  title = 'commute';
}
