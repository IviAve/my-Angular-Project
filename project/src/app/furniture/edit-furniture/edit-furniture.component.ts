import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-edit-furniture',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-furniture.component.html',
  styleUrl: './edit-furniture.component.css'
})
export class EditFurnitureComponent {
  constructor(private apiService: ApiService) {}
}
