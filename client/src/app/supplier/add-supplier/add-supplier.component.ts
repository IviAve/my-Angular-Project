import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent {
  constructor(private apiService: ApiService) {}

  // addSupplier(event: Event, themeName: string, postText: string) {
  //   event.preventDefault();

  //   this.apiService.createSupplier(themeName, postText).subscribe((data) => {
  //     console.log(data);
  //   });
  //}
}
