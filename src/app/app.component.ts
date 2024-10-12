import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "../customcomponent/main/main.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ContentComponent } from "./content/content.component";
import { TemplateTestComponent } from "./template-test/template-test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, NavigationComponent, ContentComponent, TemplateTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-project';
  name = 'Nisala Chamodya';
}
