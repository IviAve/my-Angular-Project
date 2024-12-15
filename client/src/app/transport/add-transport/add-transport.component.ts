import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-transport',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-transport.component.html',
  styleUrl: './add-transport.component.css',
})
export class AddTransportComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addTransport(form: NgForm) {
    if (form.invalid) {
    console.error('Form is invalid');
      return;
    }

    const { name, type, capacity, price,  location, phone, imageUrl, summary } = form.value;

    this.apiService.createTransport(name, type, capacity, price,  location, phone, imageUrl, summary).subscribe(() => {
      this.router.navigate(['/catalog-transport']);
      form.reset()  // for reset form 
    });
  }

  
  
}


