import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-transport-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-transport-services.component.html',
  styleUrl: './add-transport-services.component.css'
})
export class AddTransportServicesComponent {
  constructor(private apiService: ApiService) {}

  
}
