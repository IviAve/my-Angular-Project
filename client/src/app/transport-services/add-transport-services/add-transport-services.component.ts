// import { Component } from '@angular/core';
// import { ApiService } from '../../api.service';
// import { FormsModule, NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add-transport-services',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './add-transport-services.component.html',
//   styleUrl: './add-transport-services.component.css',
// })
// export class AddTransportServicesComponent {
//   constructor(private apiService: ApiService, private router: Router) {}

//   addTransport(form: NgForm) {
//     if (form.invalid) {
//     console.error('Form is invalid');
//       return;
//     }

//     const { category, condition, delivery, location, phone, imageUrl, summary } = form.value;

//     this.apiService.createTransport(category, condition, delivery, location, phone, imageUrl, summary).subscribe(() => {
//       this.router.navigate(['/catalog-furniture']);
//       form.reset()  // for reset form 
//     });
//   }

  
  
// }


