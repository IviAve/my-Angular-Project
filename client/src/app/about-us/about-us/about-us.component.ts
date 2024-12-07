import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  constructor(private apiService: ApiService) {}

}
