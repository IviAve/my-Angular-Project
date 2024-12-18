import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageUrlDirective } from '../../directives/image-url.directive';

@Component({
  selector: 'app-add-furniture',
  standalone: true,
  imports: [FormsModule, ImageUrlDirective],
  templateUrl: './add-furniture.component.html',
  styleUrl: './add-furniture.component.css',
})
export class AddFurnitureComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addFurniture(form: NgForm) {
    if (form.invalid) {
    console.error('Form is invalid');
      return;
    }

    const { category, condition, delivery, location, phone, imageUrl, summary } = form.value;

    this.apiService.createFurniture(category, condition, delivery, location, phone, imageUrl, summary).subscribe(() => {
      this.router.navigate(['/catalog-furniture']);
      form.reset()  // for reset form 
    });
  }

  
  
}


