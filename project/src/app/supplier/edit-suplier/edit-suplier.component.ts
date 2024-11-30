import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-edit-suplier',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-suplier.component.html',
  styleUrl: './edit-suplier.component.css'
})
export class EditSuplierComponent {
  constructor(private apiService: ApiService) {}
}
