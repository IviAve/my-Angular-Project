import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-furniture',
  standalone: true,
  imports: [FormsModule],
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

  // addFurniture(form: NgForm) {
  //   if (form.invalid) {
  //     console.error('Form is invalid');
  //     return;
  //   }
  
  //   console.log('Form is valid, sending data:', form.value);
  
  //   const { category, condition, delivery, location, phone, imageUrl, summary } = form.value;
  
  //   this.apiService
  //     .createFurniture(category, condition, delivery, location, phone, imageUrl, summary)
  //     .subscribe({
  //       next: () => {
  //         console.log('Furniture created successfully');
  //         //form.reset();

  //         // form.resetForm();
  //         console.log('Form reset completed'); // Ресет на формата
  //         this.router.navigate(['/catalog-furniture']).then((navigated) => {
  //           if (navigated) {
  //             console.log('Navigation to catalog-furniture was successful');
  //           } else {
  //             console.error('Navigation failed');
  //           }
  //         });
  //       },
  //       error: (err) => {
  //         console.error('Error during furniture creation:', err);
  //       },
  //     });
  //}
  
  
}


