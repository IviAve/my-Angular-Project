import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-details-furniture',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-furniture.component.html',
  styleUrl: './details-furniture.component.css'
})
export class DetailsFurnitureComponent {
  constructor(private apiService: ApiService) {}
}
