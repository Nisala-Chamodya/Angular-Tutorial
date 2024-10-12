import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "../customcomponent/main/main.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ContentComponent } from "./content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, NavigationComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-project';
  name = 'Nisala Chamodya';
}
