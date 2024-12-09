import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-details-transport-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-transport-services.component.html',
  styleUrl: './details-transport-services.component.css'
})
export class DetailsTransportServicesComponent {
  constructor(private apiService: ApiService) {}
}
