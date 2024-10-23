import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressSelectorComponent } from './components/address-selector/address-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddressSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'country-state-city';
}
