import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog-transport-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog-transport-services.component.html',
  styleUrl: './catalog-transport-services.component.css'
})
export class CatalogTransportServicesComponent {
  constructor(private apiService: ApiService) {}
}
