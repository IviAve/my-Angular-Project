import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog-supplier',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog-supplier.component.html',
  styleUrl: './catalog-supplier.component.css'
})
export class CatalogSupplierComponent {
  constructor(private apiService: ApiService) {}
}
