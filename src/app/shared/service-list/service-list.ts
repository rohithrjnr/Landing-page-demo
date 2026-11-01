import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../data/site-data';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-list.html',
})
export class ServiceListComponent {
  readonly services = SERVICES;
}
