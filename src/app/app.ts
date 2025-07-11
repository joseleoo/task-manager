import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'task-manager';
}
