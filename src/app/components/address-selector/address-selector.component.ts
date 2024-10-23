import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Country } from '../../models/country';
import { State } from '../../models/state';
import { City } from '../../models/city';

@Component({
  selector: 'app-address-selector',
  standalone: true,
  imports: [],
  templateUrl: './address-selector.component.html',
  styleUrl: './address-selector.component.css',
})
export class AddressSelectorComponent {
  countries: Country[] = [];
  states: State[] = [];
  cities: City[] = [];
  selectedCountry: string = '';
  selectedState: string = '';

  constructor(private dataService: DataService) {
    this.getCountries();
  }

  getCountries() {
    this.dataService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  onCountryChange(event: any) {
    this.selectedCountry = event.target.value;
    this.dataService.getStates(this.selectedCountry).subscribe((data) => {
      this.states = data;
    });
  }

  onStateChange(event:any){
    this.selectedState=event.target.value;
    this.dataService.getCities(this.selectedCountry,this.selectedState).subscribe(data=>{
      this.cities=data;
    })
  }
}
