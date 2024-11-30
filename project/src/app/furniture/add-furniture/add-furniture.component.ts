import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-add-furniture',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-furniture.component.html',
  styleUrl: './add-furniture.component.css'
})
export class AddFurnitureComponent {
  constructor(private apiService: ApiService) {}
}
