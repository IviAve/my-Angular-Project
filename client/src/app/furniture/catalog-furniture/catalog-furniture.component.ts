import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-catalog-furniture',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog-furniture.component.html',
  styleUrl: './catalog-furniture.component.css'
})
export class CatalogFurnitureComponent {
  constructor(private apiService: ApiService) {}
}
