import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-edit-transport-cervices',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-transport-services.component.html',
  styleUrl: './edit-transport-services.component.css'
})
export class EditTransportServicesComponent {
  constructor(private apiService: ApiService) {}
}
