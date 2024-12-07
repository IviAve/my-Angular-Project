import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-details-supplier',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-supplier.component.html',
  styleUrl: './details-supplier.component.css'
})
export class DetailsSupplierComponent {
  constructor(private apiService: ApiService) {}
}
