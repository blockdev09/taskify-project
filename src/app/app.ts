import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialLayout } from "./layout/initial-layout/initial-layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InitialLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('taskify-frontend');
}
